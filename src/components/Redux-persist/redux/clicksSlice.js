import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// export const clicksSlice = createSlice({
//   name: 'clicks',
//   initialState: { value: 0 },
//   reducers: {
//     update(state) {
//       state.value += 1;
//     },
//   },
// });
// если передаем значение при вызове екшена:
const clicksSlice = createSlice({
  name: 'clicks',
  initialState: { value: 0 },
  reducers: {
    update(state, action) {
      state.value += action.payload;
    },
  },
});

// добавляем редакс персист
const persistConfig = {
  key: 'clicks',
  storage,
  //   если хотм=им сохр неск значение
  //   whitelist: ['value', 'a'],
  // блеклист - если все, кроме одного
  whitelist: ['value'],
};

// const persistedClicksReducer = persistReducer(
//   persistConfig,
//   clicksSlice.reducer
// );
export const clicksReducer = persistReducer(persistConfig, clicksSlice.reducer);

export const { update } = clicksSlice.actions;

// Selectors
export const getClicksValue = state => state.clicks.value;
