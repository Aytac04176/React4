import { configureStore } from '@reduxjs/toolkit';
import cardReducer from './cardSlice';
import postReducer from './postSlice';

const store = configureStore({
  reducer: {
    cart: cardReducer,
    post: postReducer,
  },
});

export default store;
