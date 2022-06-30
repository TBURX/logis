import { LatLngExpression } from 'leaflet';

export interface IState {
  latlng: LatLngExpression;
  polyline: LatLngExpression[];
}
