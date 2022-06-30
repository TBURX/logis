import { LatLngTuple } from 'leaflet';
import { IMap } from './types';

export const points: IMap<LatLngTuple> = {
  Пермь: [58.00958700438822, 56.23920679092408],
  Москва: [55.74458203537829, 37.60543942451478],
  'Санкт-Петербург': [59.93921903902594, 30.31557083129883],
};

export const defaultPointName = 'Пермь';

export const defaultLatlng = points[defaultPointName];
