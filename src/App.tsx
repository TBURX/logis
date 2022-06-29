import { Button } from 'antd';
import { LatLngExpression } from 'leaflet';
import React, { useCallback, useState } from 'react';
import SplitterLayout from 'react-splitter-layout';
import { getRoute } from './bi';
import DestinationSelector from './components/DestinationSelector';
import Map from './components/Map';
import { points } from './constants';

const App: React.FC = () => {
  const [latlng, setLatlng] = useState<LatLngExpression>(points[Object.keys(points)[0]]);
  const [polyline, setPolyline] = useState<LatLngExpression[]>([]);

  const handleChange = useCallback((val: string) => {
    setLatlng(points[val]);
  }, []);

  const handlePolyline = useCallback(async () => {
    const route = await getRoute(Object.values(points));
    setPolyline(route);
  }, []);

  return (
    <SplitterLayout>
      <>
        <DestinationSelector onChange={handleChange} />
        <Button onClick={handlePolyline}>request</Button>
      </>
      <Map latlng={latlng} polyline={polyline} />
    </SplitterLayout>
  );
};

export default App;
