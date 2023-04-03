import { createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import { rootReducer } from './reducer';
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

const enhancer = devToolsEnhancer();

export const store = createStore(rootReducer, enhancer);

//   Якщо вам не потрібний початковий стан preloadedState, то значення enhancer передається другим аргументом. В іншому випадку - третім.

/*createStore(reducer, preloadedState, enhancer)

reducer - функція із логікою зміни стану Redux. Обов'язковий параметр.
preloadedState - початковий стан програми. Це має бути об'єкт тієї ж форми, що й, як мінімум, частина стану. Необов'язковий параметр.
enhancer - функція розширення можливостей стору. Необов'язковий параметр.*/
