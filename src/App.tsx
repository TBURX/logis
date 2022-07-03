import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SplitterLayout from 'react-splitter-layout';
import DestinationSelector from './components/DestinationSelector';
import Map from './components/Map';
import { getTrackCreator } from './saga/track';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handlePolyline = useCallback(async () => {
    dispatch(getTrackCreator());
  }, []);

  return (
    <SplitterLayout>
      <>
        <DestinationSelector />
        <Button onClick={handlePolyline}>request</Button>
      </>
      <Map />
    </SplitterLayout>
  );
};

export default App;
