import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import { clicksReducer } from './clicksSlice';

// export const store = configureStore({
//   reducer: {
//     clicks: clicksSlice.reducer,
//   },
// });

export const store = configureStore({
  reducer: {
    clicks: clicksReducer,
  },
});

export const persistor = persistStore(store);
