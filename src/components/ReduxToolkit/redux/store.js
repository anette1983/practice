// Before
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { rootReducer } from './reducer';
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
//=============== After ========================
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasksSlice';
import { filtersReducer } from './filtersSlice';
import { userSlice } from 'components/ReduxToolkitLogin/redux/userSlice';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
    user: userSlice.reducer,
  },
});
// у файлі створення стора імпортуємо та використовуємо окремі редюсери. Фкція конфігер стор автоматично створ кореневий редьюсер

// Початкове значення стану Redux для кореневого редюсера,
// якщо не передати параметр preloadedState.
// const initialState = {
//   tasks: [
//     { id: 0, text: 'Learn HTML and CSS', completed: true },
//     { id: 1, text: 'Get good at JavaScript', completed: true },
//     { id: 2, text: 'Master React', completed: false },
//     { id: 3, text: 'Discover Redux', completed: false },
//     { id: 4, text: 'Build amazing apps', completed: false },
//   ],
//   filters: {
//     status: 'all',
//   },
// };
// Поки що використовуємо редюсер який
// тільки повертає отриманий стан
// const rootReducer = (state = initialState, action) => {
//   return state;
// };

//   Якщо вам не потрібний початковий стан preloadedState, то значення enhancer передається другим аргументом. В іншому випадку - третім.

/*createStore(reducer, preloadedState, enhancer)

reducer - функція із логікою зміни стану Redux. Обов'язковий параметр.
preloadedState - початковий стан програми. Це має бути об'єкт тієї ж форми, що й, як мінімум, частина стану. Необов'язковий параметр.
enhancer - функція розширення можливостей стору. Необов'язковий параметр.*/
