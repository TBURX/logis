import { createAction, PayloadAction } from '@reduxjs/toolkit';
import { put, takeLatest } from 'redux-saga/effects';
import { points } from '../constants';
import { actions } from '../store/app/slice';
import { trackActions } from './track';

const SET_ORDER_FROM = 'SET_ORDER_FROM';
const SET_ORDER_TO = 'SET_ORDER_TO';
const SET_ORDER_INDEX = 'SET_ORDER_INDEX';

const setOrderFrom = createAction<{ value: string; index: number }>(SET_ORDER_FROM);
const setOrderTo = createAction<{ value: string; index: number }>(SET_ORDER_TO);
const setOrderIndex = createAction<number>(SET_ORDER_INDEX);

export const orderActions = { setOrderFrom, setOrderTo, setOrderIndex };

export function* setOrderFromWorker({ payload }: PayloadAction<{ value: string; index: number }>) {
  const { value, index } = payload;
  const mapPoint = points.find((p) => p.name === value);
  if (mapPoint) yield put(actions.setFrom({ value: mapPoint, index }));
}

export function* setOrderToWorker({ payload }: PayloadAction<{ value: string; index: number }>) {
  const { value, index } = payload;
  const mapPoint = points.find((p) => p.name === value);
  if (mapPoint) yield put(actions.setTo({ value: mapPoint, index }));
}

export function* setOrderIndexWorker({ payload }: PayloadAction<number>) {
  yield put(actions.setSelectedOrderIndex(payload));
  yield put(trackActions.getTrack());
}

export function* ordersWatcher() {
  yield takeLatest(SET_ORDER_FROM, setOrderFromWorker);
  yield takeLatest(SET_ORDER_TO, setOrderToWorker);
  yield takeLatest(SET_ORDER_INDEX, setOrderIndexWorker);
}
