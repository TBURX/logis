import * as React from 'react';
import { MapContainer, Polyline, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import { LatLngExpression } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Marker from '../Marker';

const MapProvider: React.FC<Partial<IProps>> = ({ latlng }) => {
  const map = useMapEvents({
    click(e) {
      map.flyTo(e.latlng);
      console.log('fly to', e.latlng);
    },
  });
  React.useEffect(() => {
    latlng && map.flyTo(latlng, 15);
  }, [latlng, map]);
  return null;
};

interface IProps {
  latlng: LatLngExpression;
  polyline?: LatLngExpression[];
}

const Map: React.FC<IProps> = (props) => {
  const { latlng, polyline } = props;
  return (
    <MapContainer style={{ height: '100%', width: '1000px' }} center={latlng} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      {polyline?.length && (
        <>
          <Polyline pathOptions={{ color: 'red' }} positions={polyline} />
          <Marker position={polyline[0]}>
            <Popup offset={[0, -41]}>Точка загрузки</Popup>
          </Marker>
          <Marker position={polyline[polyline.length - 1]}>
            <Popup offset={[0, -41]}>Точка выгрузки</Popup>
          </Marker>
        </>
      )}
      <MapProvider {...props} />
    </MapContainer>
  );
};

export default Map;
