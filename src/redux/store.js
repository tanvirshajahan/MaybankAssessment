import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './productReducer';

const store = configureStore({
  reducer: rootReducer,
});

export default store;