import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from '../saga';
import { reducer } from './app/slice';

const sagaMiddleware = createSagaMiddleware();

export default configureStore({
  reducer,
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootWatcher);
