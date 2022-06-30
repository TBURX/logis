import { LatLngExpression } from 'leaflet';
import { IState } from '../types';

export default {
  latlng: (state: IState): LatLngExpression => state.latlng,
  polyline: (state: IState): LatLngExpression[] => state.polyline,
};
