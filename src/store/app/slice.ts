import { LatLngExpression } from 'leaflet';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { defaultLatlng } from '../../constants';
import { IState } from '../types';

const initialState: IState = {
  latlng: defaultLatlng,
  polyline: [],
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
  },
});
