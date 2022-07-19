import { LatLngExpression } from 'leaflet';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultLatlng, defaultPoint } from '../../constants';
import { IState } from '../types';
import { MapPoint } from '../../types';

const initialState: IState = {
  latlng: defaultLatlng,
  polyline: [],
  orders: [],
  selectedOrder: undefined,
  resized: false,
};

export const { actions, reducer } = createSlice({
  initialState,
  name: 'app',
  reducers: {
    setLatlng(state: IState, { payload }: PayloadAction<LatLngExpression>) {
      state.latlng = payload;
    },
    setPolyline(state: IState, { payload }: PayloadAction<LatLngExpression[]>) {
      state.polyline = payload;
    },
    setSelectedOrderIndex(state: IState, { payload }: PayloadAction<number | undefined>) {
      state.selectedOrder = payload;
    },
    removeOrderAtIndex(state: IState, { payload }: PayloadAction<number>) {
      state.orders.splice(payload, 1);
    },
    addOrder(state: IState) {
      state.orders.push({ from: defaultPoint, to: defaultPoint });
    },
    setFrom(state: IState, { payload }: PayloadAction<{ value: MapPoint; index: number }>) {
      const { value, index } = payload;
      state.orders[index].from = value;
    },
    setTo(state: IState, { payload }: PayloadAction<{ value: MapPoint; index: number }>) {
      const { value, index } = payload;
      state.orders[index].to = value;
    },
    setResized(state: IState, { payload }: PayloadAction<boolean>) {
      state.resized = payload;
    },
  },
});
