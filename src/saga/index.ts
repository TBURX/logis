import { all } from 'redux-saga/effects';
import { ordersWatcher } from './order';
import { trackWatcher } from './track';

export function* rootWatcher() {
  yield all([trackWatcher(), ordersWatcher()]);
}
