import * as React from 'react';
import { MarkerProps, Marker as LeafletMarker } from 'react-leaflet';
import L from 'leaflet';

const markerIcon = L.icon({
  // eslint-disable-next-line global-require
  iconUrl: require('../../lib/images/marker-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [13, 41],
});

const Marker: React.FC<MarkerProps> = (props) => <LeafletMarker {...props} icon={markerIcon} />;

export default Marker;
