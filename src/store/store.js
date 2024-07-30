import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../feature/Userslice';

export const store = configureStore({
  reducer: {
    message: messageReducer,
  },
});

