import * as React from 'react';
import { MapContainer, Polyline, Popup, TileLayer, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Marker from '../Marker';
import selectors from '../../store/app/selectors';

const MapProvider: React.FC = () => {
  const latlng = useSelector(selectors.latlng);
  const polyline = useSelector(selectors.polyline);
  const map = useMapEvents({
    click(e) {
      map.flyTo(e.latlng);
    },
  });
  // так нормально отрабатывает рендер карты во всю панель
  setInterval(() => {
    map.invalidateSize();
  }, 400);
  React.useEffect(() => {
    latlng && map.flyTo(latlng, 15);
  }, [latlng, map]);
  React.useEffect(() => {
    polyline && map.closePopup();
  }, [polyline, map]);
  return null;
};

const Map: React.FC = () => {
  const { t } = useTranslation();
  const latlng = useSelector(selectors.latlng);
  const polyline = useSelector(selectors.polyline);
  return (
    <MapContainer style={{ height: '100%' }} center={latlng} zoom={15}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        maxZoom={19}
      />
      {polyline?.length && (
        <>
          <Polyline pathOptions={{ color: 'red' }} positions={polyline} />
          <Marker position={polyline[0]}>
            <Popup offset={[0, -41]}>{t('from')}</Popup>
          </Marker>
          <Marker position={polyline[polyline.length - 1]}>
            <Popup offset={[0, -41]}>{t('to')}</Popup>
          </Marker>
        </>
      )}
      <MapProvider />
    </MapContainer>
  );
};

export default Map;
