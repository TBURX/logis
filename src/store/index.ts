import { configureStore } from '@reduxjs/toolkit';
import { reducer } from './app/slice';

export default configureStore({
  reducer,
});
