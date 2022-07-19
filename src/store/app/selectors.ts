import { createSelector } from '@reduxjs/toolkit';
import { LatLngExpression } from 'leaflet';
import { Order } from '../../types';
import { IState } from '../types';

const latlng = (state: IState): LatLngExpression => state.latlng;
const polyline = (state: IState): LatLngExpression[] => state.polyline;
const orders = (state: IState): Order[] => state.orders;
const selectedOrderindex = (state: IState): number | undefined => state.selectedOrder;
const selectedOrder = createSelector([orders, selectedOrderindex], (_orders, orderIndex) => {
  if (orderIndex !== undefined && orderIndex >= 0) return _orders[orderIndex];
  return undefined;
});
const resized = (state: IState): boolean => state.resized;

export default {
  latlng,
  polyline,
  orders,
  selectedOrderindex,
  selectedOrder,
  resized,
};
