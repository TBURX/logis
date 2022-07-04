import { MapPoint } from './types';

export const points: MapPoint[] = [
  { name: 'Пермь, отель "Прикамье"', latlng: [58.00958700438822, 56.23920679092408] },
  { name: 'Москва, Храм Христа Спасителя', latlng: [55.74458203537829, 37.60543942451478] },
  { name: 'Санкт-Петербург, Дворцовая площадь', latlng: [59.93921903902594, 30.31557083129883] },
  { name: 'Казань, Кремль', latlng: [55.7993562, 49.1059989] },
  { name: 'Новотроицк, центральный рынок', latlng: [51.190913, 58.2916256] },
];

export const defaultPoint = points[0];

export const defaultPointName = defaultPoint.name;

export const defaultLatlng = defaultPoint.latlng;
