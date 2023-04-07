//=============== Before ========================
// import { combineReducers } from 'redux';
// import { statusFilters } from './constants';

// const tasksInitialState = [];

// const tasksReducer = (state = tasksInitialState, action) => {
//   // Reducer code
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// const filtersReducer = (state = filtersInitialState, action) => {
//   // Reducer code
// };

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });

//=============== After ========================
import { createAction, createReducer } from '@reduxjs/toolkit';
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from './actions';
import { statusFilters } from './constants';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Get good at JavaScript', completed: true },
  { id: 2, text: 'Master React', completed: false },
  { id: 3, text: 'Discover Redux', completed: false },
  { id: 4, text: 'Build amazing apps', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask]: (state, action) => {
    state.push(action.payload);
  },
  [deleteTask]: (state, action) => {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted]: (state, action) => {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
        break;
      }
    }
  },
});

// під капотом  [addTask]:
// const addTask = createAction('tasks/addTask')

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});

// export const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case addTask.type:
//       return [...state, action.payload];

//     case deleteTask.type:
//       return state.filter(task => task.id !== action.payload);

//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });

//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case setStatusFilter.type:
//       return {
//         ...state,
//         status: action.payload,
//       };

//     default:
//       return state;
//   }
// };

// Також функція configureStore() може автоматично створити кореневий редюсер. Для цього необхідно передати властивості reducer об'єкт тієї ж форми що в combineReducers.

// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: statusFilters.all,
//   },
// };

// export const rootReducer = (state = initialState, action) => {
//   // Редюсер розрізняє екшени за значенням властивості type
//   switch (action.type) {
//     // Залежно від типу екшену виконуватиметься різна логіка
//     case 'tasks/addTask': {
//       // Потрібно повернути новий об'єкт стану
//       return {
//         // в якому є всі дані існуючого стану
//         ...state,
//         // та новий масив задач
//         tasks: [
//           // в якому є всі існуючі завдання
//           ...state.tasks,
//           // та об'єкт нового завдання
//           action.payload,
//         ],
//       };
//     }
//     default:
//       // Кожен редюсер отримує всі екшени, відправлені в стор.
//       // Якщо редюсер не повинен обробляти якийсь тип екшену,
//       // необхідно повернути наявний стан без змін.
//       return state;
//   }
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return {
//         ...state,
//         tasks: [...state.tasks, action.payload],
//       };
//     case 'tasks/deleteTask':
//       return {
//         ...state,
//         tasks: state.tasks.filter(task => task.id !== action.payload),
//       };
//     case 'tasks/toggleCompleted':
//       return {
//         ...state,
//         tasks: state.tasks.map(task => {
//           if (task.id === action.payload) {
//             return {
//               ...task,
//               completed: !task.completed,
//             };
//           }
//           return task;
//         }),
//       };
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         filters: {
//           ...state.filters,
//           status: action.payload,
//         },
//       };
//     default:
//       return state;
//   }
// };

// композиція редьюсерів

// const tasksInitialState = [
//   { id: 0, text: 'Learn HTML and CSS', completed: true },
//   { id: 1, text: 'Get good at JavaScript', completed: true },
//   { id: 2, text: 'Master React', completed: false },
//   { id: 3, text: 'Discover Redux', completed: false },
//   { id: 4, text: 'Build amazing apps', completed: false },
// ];

// // Відповідає лише за оновлення властивості tasks
// // Тепер значенням параметра state буде масив завдань
// const tasksReducer = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case 'tasks/addTask':
//       return [...state, action.payload];
//     case 'tasks/deleteTask':
//       return state.filter(task => task.id !== action.payload);
//     case 'tasks/toggleCompleted':
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// // Відповідає лише за оновлення властивості filters
// // Тепер значенням параметра state буде об'єкт фільтрів
// const filtersReducer = (state = filtersInitialState, action) => {
//   switch (action.type) {
//     case 'filters/setStatusFilter':
//       return {
//         ...state,
//         status: action.payload,
//       };
//     default:
//       return state;
//   }
// };

// // кореневий редьюсер
// // Код редюсерів tasksReducer та filtersReducer
// // export const rootReducer = (state = {}, action) => {
// //   // Повертаємо об'єкт стану
// //   return {
// //     // Обом редюсерам передаємо тільки частину стану, за яку вони відповідають.
// //     tasks: tasksReducer(state.tasks, action),
// //     filters: filtersReducer(state.filters, action),
// //   };
// // };

// // Або створимо кореневий редюсер вручну, у бібліотеці Redux є функція combineReducers, яка робить те саме, але коротше.

// // Імпортуємо функцію композиції редюсерів
// // import { combineReducers } from 'redux';

// // Код редюсерів tasksReducer та filtersReducer

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
