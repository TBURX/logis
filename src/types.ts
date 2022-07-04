import { LatLngTuple } from 'leaflet';

export interface MapPoint {
  name: string;
  latlng: LatLngTuple;
}

export interface Order {
  from: MapPoint;
  to: MapPoint;
}

export interface IOrderRow {
  from: JSX.Element;
  to: JSX.Element;
  index: number;
}
