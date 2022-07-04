import { createAction } from '@reduxjs/toolkit';
import { LatLngTuple } from 'leaflet';
import { call, put, select, takeEvery } from 'redux-saga/effects';
import { getRoute } from '../bi';
import selectors from '../store/app/selectors';
import { actions } from '../store/app/slice';
import { Order } from '../types';

const GET_TRACK = 'GET_TRACK';
const getTrack = createAction(GET_TRACK);

export const trackActions = {
  getTrack,
};

function* getTrackWorker() {
  const selectedOrder: Order = yield select(selectors.selectedOrder);
  if (!selectedOrder) return;
  const route: LatLngTuple[] = yield call(getRoute, [
    selectedOrder.from.latlng,
    selectedOrder.to.latlng,
  ]);
  yield put(actions.setPolyline(route));
}

export function* trackWatcher() {
  yield takeEvery(GET_TRACK, getTrackWorker);
}
