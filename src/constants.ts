import { MapPoint } from './types';

export const points: MapPoint[] = [
  { name: 'Пермь', latlng: [58.00958700438822, 56.23920679092408] },
  { name: 'Москва', latlng: [55.74458203537829, 37.60543942451478] },
  { name: 'Санкт-Петербург', latlng: [59.93921903902594, 30.31557083129883] },
];

export const defaultPointName = 'Пермь';

export const defaultLatlng = points.filter((p) => p.name === defaultPointName)[0]?.latlng;
