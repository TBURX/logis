import { Button } from 'antd';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import SplitterLayout from 'react-splitter-layout';
import { actions } from './store/app/slice';
import { getRoute } from './bi';
import DestinationSelector from './components/DestinationSelector';
import Map from './components/Map';
import { points } from './constants';

const App: React.FC = () => {
  const dispatch = useDispatch();

  const handlePolyline = useCallback(async () => {
    const route = await getRoute(Object.values(points));
    dispatch(actions.setPolyline(route));
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
