Redux Toolkit надає функцію configureStore(options), яка обертає оригінальний
createStore(), єдиним аргументом очікує об'єкт параметрів та налаштовує деякі
корисні інструменти розробки як частина процесу створення стора.

```js
src / redux / store.js;
//=============== Before ========================
import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';
const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
//=============== After ========================
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducer';
const store = configureStore({
  reducer: rootReducer,
});
```

<!-- Також функція configureStore() може автоматично створити кореневий редюсер. Для цього необхідно передати властивості reducer об'єкт тієї ж форми що в combineReducers. -->

видалимо створення кореневого редюсера в нашому коді програми та додамо імпорти
редюсерів завдань та фільтрів із файлу src/redux/reducer.js.

createAction Функція createAction(type) спрощує процес оголошення екшенів. В
якості аргументу вона приймає рядок який описує тип дії та повертає генератор
екшену.

Тип екшену Є два способи отримати тип екшену, наприклад, для використання в
редюсері.

```js
import { createAction } from '@reduxjs/toolkit';

const addTask = createAction('tasks/AddTask');

// У генератора екшену є властивість type
console.log(addTask.type); // "tasks/AddTask"

// Метод toString() функції addTask був перевизначений
console.log(addTask.toString()); // "tasks/AddTask"
```

У редюсері імпортуємо екшени та використовуємо їх властивість type для заміни
рядків всередині інструкції switch.

Вміст payload За замовчуванням генератори екшенів приймають один аргумент, який
стає значенням властивості payload. Якщо потрібно написати додаткову логіку
створення значення payload, наприклад, додати унікальний ідентифікатор,
createAction можна передати другий, необов'язковий аргумент – функцію створення
екшену.

createAction(type, prepareAction)

Аргументи генератора екшену будуть передані функції prepareAction, яка повинна
повернути об'єкт із властивістю payload. Властивість type буде додано
автоматично.

```js
src / redux / actions.js;
import { createAction, nanoid } from '@reduxjs/toolkit';
export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});
console.log(addTask('Learn Redux Toolkit'));
/**
 * {
 *   type: 'tasks/addTask',
 *   payload: {
 *     text: 'Learn Redux Toolkit',
 *     id: '4AJvwMSWEHCchcWYga3dj',
 *     completed: false
 *   }
 * }
 **/
```

createReducer Будь-який редюсер отримує стан Redux і екшен, перевіряє тип екшену
всередині інструкції switch і виконує відповідну логіку оновлення стану для
даного екшену. До того ж, редюсер визначає початкове значення стану та повертає
отриманий стан, якщо не повинен обробляти екшен. Цей спосіб вимагає занадто
багато шаблонного коду і схильний до помилок. Функція createReducer() спрощує
процес оголошення редюсерів.

createReducer(initialState, actionsMap) Першим аргументом вона чекає на
початковий стан редюсера, а на другий об'єкт властивостей спеціального формату,
де кожен ключ це тип екшену, а значення – це функція-редюсер цього типу. Тобто
кожен case стає ключем об'єкта, для якого пишеться власний міні-редюсер.

```js
src / redux / reducer.js;
import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { addTask, deleteTask, toggleCompleted } from './actions';
const tasksInitialState = [];
//=============== Before ========================
const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
    // case logic
    case deleteTask.type:
    // case logic
    case toggleCompleted.type:
    // case logic
    default:
      return state;
  }
};
//=============== After ========================
export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {},
  [deleteTask]: (state, action) => {},
  [toggleCompleted]: (state, action) => {},
});
```

блоку не потрібен default. Функція createReducer автоматично додає редюсеру
обробку поведінки за замовчуванням.

Іноді код іммутабельного оновлення стану лаконічніший, ніж його альтернатива, що
«змінює». Наприклад, у редюсері обробки екшену видалення завдання. У такому разі
необхідно обов'язково повернути новий стан.

```js
src / redux / reducer.js;
export const tasksReducer = createReducer(tasksInitialState, {
  [deleteTask]: (state, action) => {
    // ❌ Не правильно
    // state.filter(task => task.id !== action.payload)
    // ✅ Правильно
    return state.filter(task => task.id !== action.payload);
  },
});
```

Один із підводних каменів бібліотеки Immer полягає в тому, що в коді одного
редюсера можна лише або мутувати стан, або повернути оновлений, але не те й інше
водночас.

```js
const reducer = createReducer([], {
  [doSomething]: (state, action) => {
    // ❌ Так робити не можна, буде згенеровано виняток
    state.push(action.payload);
    return state.map(value => value * 2);
  },
});
```

createSlice При проектуванні структура стану Redux ділиться на слайси (slice,
частина), за кожен із яких відповідає окремий редюсер. У нашому додатку
планувальника задач є два слайси - завдання (tasks) та фільтри (filters).

```js
const appState = {
  tasks: [],
  filters: {},
};
```

Для кожного слайсу створюється стандартний набір сутностей: типи екшенів,
генератори екшенів та редюсер. Редюсери визначають початковий стан слайсу,
список екшенів, що впливають на нього та операції оновлення стану.

Функція createSlice() це надбудова над createAction() та createReducer(), яка
стандартизує та ще більше спрощує оголошення слайсу. Вона приймає параметри
налаштувань, створює і повертає типи екшенів, генератори екшенів та редюсер.

```js
import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  // Ім'я слайсу
  name: 'tasks',
  // Початковий стан редюсера слайсу
  initialState: tasksInitialState,
  // Об'єкт редюсерів
  reducers: {
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// Генератори екшенів
const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
// Редюсер слайсу
const tasksReducer = tasksSlice.reducer;
```

Властивість name визначає ім'я слайсу, яке додаватиметься під час створення
екшенів, як приставка до імен редюсерів, оголошених у властивості reducers. Так
ми отримаємо екшени з типами tasks/addTask, tasks/deleteTask та
tasks/toggleCompleted.

Функція createSlice() у своїй реалізації використовує createReducer і бібліотеку
Immer, тому можна писати логіку оновлення стану так, як якби ми безпосередньо
змінювали його.

```js
import { createSlice } from '@reduxjs/toolkit';

const tasksInitialState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask(state, action) {
      state.push(action.payload);
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});

const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
const tasksReducer = tasksSlice.reducer;
```

Вміст payload Генератор екшену addTask очікує лише рядок з текстом завдання,
після чого змінює значення payload використовуючи функцію підготовки екшену.

```js
import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      text,
      id: nanoid(),
      completed: false,
    },
  };
});
```

Щоб зробити те саме при створенні слайсу, властивості в об'єкті редюсерів, в
нашому випадку addTask, необхідно передати не функцію, а об'єкт із двома
властивостями - reducer та prepare.

```js
import { createSlice, nanoid } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    // Код решти редюсерів
  },
});
```

Файли слайсів Нам більше не потрібний файл reducer.js, тому що під кожен слайс
ми створимо окремий файл. Для слайсу завдань це буде файл tasksSlice.js .

```js
src / redux / tasksSlice.js;
import { createSlice } from '@reduxjs/toolkit';
const tasksInitialState = [];
const tasksSlice = createSlice({
  name: 'tasks',
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    deleteTask(state, action) {
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    toggleCompleted(state, action) {
      for (const task of state) {
        if (task.id === action.payload) {
          task.completed = !task.completed;
          break;
        }
      }
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer;
```

```js
src / redux / filtersSlice.js;
import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
const filtersInitialState = {
  status: statusFilters.all,
};
const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});
// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
```

Створення стора У файлі створення стора необхідно змінити код імпорту редюсерів.

```js
src / redux / store.js;
import { configureStore } from '@reduxjs/toolkit';
//=============== Before ========================
// import { tasksReducer, filtersReducer } from "./reducer";
//=============== After ========================
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
```

Генератори екшенів Генератори екшенів тепер створюються автоматично для кожного
слайсу. Це означає, що нам більше не потрібно вручну оголошувати їх в окремому
файлі. createAction(). Ми можемо видалити файл actions.js та оновити імпорти
генераторів екшенів у файлах компонентів. Імпорти генераторів екшенів
виготовляються з відповідного файлу слайсу.

```js
//=============== Before ========================
// import { deleteTask, toggleCompleted } from "redux/actions";
//=============== After ========================
import { deleteTask, toggleCompleted } from 'redux/tasksSlice';
```

Змінимо структуру файлів: у редакс: constants, selectors, taskSlice,
filterSlice, store
