// const fetchTasks = () => async dispatch => {
//     try {
//         const response = await axios.get("/tasks");
//     } catch (error) {

//     }
// };
import axios from 'axios';

// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './tasksSlice';

// Тепер усередині операції надсилаємо синхронні екшени для обробки трьох ситуацій:
// встановлення індикатора завантаження, отримання даних при успішному запиті та
// обробка помилки.

// export const fetchTasks = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get('/tasks');
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     // Обробка помилки
//     dispatch(fetchingError(error.message));
//   }
// };

import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://62584f320c918296a49543e7.mockapi.io';
// export const fetchTasks = createAsyncThunk('tasks/fetchAll', async () => {
//   const response = await axios.get('/tasks');
//   return response.data;
// });

// Функція createAsyncThunk не створює редюсер, тому що не може знати, як ми хочемо відстежувати стан завантаження, з якими даними завершиться запит та як їх правильно обробити. Тому наступним кроком буде зміна коду слайсу tasksSlice так, щоб він обробляв нові екшени.

//  додаємо обробку запиту, що завершився з помилкою. Треба щоб у випадку помилки запиту повертався проміс, який буде відхилено. Тоді на екшені помилки запиту з'явиться властивість payload.

export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      return response.data;
    } catch (e) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
