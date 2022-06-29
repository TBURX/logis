import { LatLngExpression } from 'leaflet';
import React, { useCallback, useState } from 'react';
import DestinationSelector from './components/DestinationSelector';
import Map from './components/Map';
import { points } from './constants';

const App: React.FC = () => {
  const [latlng, setLatlng] = useState<LatLngExpression>(points[Object.keys(points)[0]]);

  const handleChange = useCallback((val: string) => {
    setLatlng(points[val]);
    console.log(val);
  }, []);

  return (
    <>
      <DestinationSelector onChange={handleChange} />
      <Map latlng={latlng} />
    </>
  );
};

export default App;
