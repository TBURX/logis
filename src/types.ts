import { LatLngTuple } from 'leaflet';

export interface MapPoint {
  name: string;
  latlng: LatLngTuple;
}

export interface Order {
  from: MapPoint;
  to: MapPoint;
}
