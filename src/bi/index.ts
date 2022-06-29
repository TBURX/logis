import axios from 'axios';
import { LatLngTuple } from 'leaflet';

const apiKey = 'f5132a71-0505-44d6-9dd6-da452ad8d037';
const routeApi = 'https://graphhopper.com/api/1/route';

type TParams = [string, string][];

export const getRoute = async (waypoints: LatLngTuple[]): Promise<LatLngTuple[]> => {
  const points: TParams = waypoints.map((waypoint) => ['point', `${waypoint[0]},${waypoint[1]}`]);
  const params: TParams = [
    ...points,
    ['profile', 'car'],
    ['locale', 'ru_RU'],
    ['points_encoded', 'false'],
    ['key', apiKey],
  ];
  try {
    const res = await axios.get(routeApi, {
      params,
      paramsSerializer: (prms: TParams) => prms.map(([key, value]) => `${key}=${value}`).join('&'),
    });
    return (
      (res.data?.paths?.[0]?.points?.coordinates as [number, number][]).map(([lng, lat]) => [
        lat,
        lng,
      ]) ?? []
    );
  } catch {
    return [];
  }
};
