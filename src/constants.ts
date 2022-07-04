import i18n from './i18n';
import { MapPoint } from './types';

export const points: MapPoint[] = [
  {
    name: i18n.t<string>('point.Perm_prikamye'),
    latlng: [58.00958700438822, 56.23920679092408],
  },
  {
    name: i18n.t<string>('point.Moscow_cathedral'),
    latlng: [55.74458203537829, 37.60543942451478],
  },
  {
    name: i18n.t<string>('point.SPB_palace_square'),
    latlng: [59.93921903902594, 30.31557083129883],
  },
  {
    name: i18n.t<string>('point.Kazan_kremlin'),
    latlng: [55.7993562, 49.1059989],
  },
  {
    name: i18n.t<string>('point.Novotroitsk_central_market'),
    latlng: [51.190913, 58.2916256],
  },
];

export const defaultPoint = points[0];

export const defaultPointName = defaultPoint.name;

export const defaultLatlng = defaultPoint.latlng;
