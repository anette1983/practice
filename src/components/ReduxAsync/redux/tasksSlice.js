import { createSlice } from '@reduxjs/toolkit';

// const tasksInitialState = {
//   items: [],
//   isLoading: false,
//   error: null,
// };

// const tasksSlice = createSlice({
//   name: 'tasksAsync',
//   initialState: tasksInitialState,
//   reducers: {
//     // Виконається в момент старту HTTP-запиту
//     fetchingInProgress(state) {
//       state.isLoading = true;
//     },
//     // Виконається якщо HTTP-запит завершився успішно
//     fetchingSuccess(state, action) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = action.payload;
//     },
//     // Виконається якщо HTTP-запит завершився з помилкою
//     fetchingError(state, action) {
//       state.isLoading = false;
//       state.error = action.payload;
//     },
//   },
// });

// // Додамо редюсер для обробки кожного з можливих станів запиту, де змінюємо відповідні частини стану.

// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;
// export const tasksAsyncReducer = tasksSlice.reducer;

// Для async Thunk - змінюємо код слайсу tasksSlice так, щоб він обробляв нові екшени. Імпортуємо операцію
import { fetchTasks } from './operations';

const tasksInitialState = {
  items: [],
  isLoading: false,
  error: null,
};

const tasksSlice = createSlice({
  name: 'tasksAsync',
  initialState: tasksInitialState,
  // Додаємо обробку зовнішніх екшенів
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

// Оскільки ці редюсери обробляють «зовнішні» екшени, для них не буде створено генератори екшенів в slice.actions, в цьому немає необхідності. тобто це не потрібно: // export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   tasksSlice.actions;

// Залишилося додати обробку запиту, що завершився з помилкою. Для цього необхідно доповнити код створення операції fetchTasks у оперейшнз так, щоб у випадку помилки запиту повертався проміс, який буде відхилено. Тоді на екшені помилки запиту з'явиться властивість payload.

export const tasksAsyncReducer = tasksSlice.reducer;
