import { configureStore } from '@reduxjs/toolkit';
import { tasksAsyncReducer } from './tasksSlice';

export const store = configureStore({
  reducer: {
    tasksAsync: tasksAsyncReducer,
  },
});