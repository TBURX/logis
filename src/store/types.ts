import { LatLngExpression } from 'leaflet';
import { Order } from '../types';

export interface IState {
  latlng: LatLngExpression;
  polyline: LatLngExpression[];
  orders: Order[];
  selectedOrder?: number;
}
