import { all } from 'redux-saga/effects';
import { trackWatcher } from './track';

export function* rootWatcher() {
  yield all([trackWatcher()]);
}
