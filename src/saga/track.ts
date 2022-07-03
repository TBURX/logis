import { Action } from '@reduxjs/toolkit';
import { LatLngTuple } from 'leaflet';
import { call, put, takeEvery } from 'redux-saga/effects';
import { getRoute } from '../bi';
import { points } from '../constants';
import { actions } from '../store/app/slice';

const GET_TRACK = 'GET_TRACK';
export const getTrackCreator = (): Action => ({ type: GET_TRACK });

function* getTrackWorker() {
  const route: LatLngTuple[] = yield call(
    getRoute,
    points.map((p) => p.latlng),
  );
  yield put(actions.setPolyline(route));
}

export function* trackWatcher() {
  yield takeEvery(GET_TRACK, getTrackWorker);
}
