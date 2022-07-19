import * as React from 'react';
import { useDispatch } from 'react-redux';
import SplitterLayout from 'react-splitter-layout';
import Map from './components/Map';
import OrdersPanel from './components/OrdersPanel';
import { actions } from './store/app/slice';

const App: React.FC = () => {
  const dispatch = useDispatch();
  const sizeChangeHandler = React.useCallback(() => {
    dispatch(actions.setResized(true));
  }, []);
  return (
    <SplitterLayout
      primaryMinSize={200}
      secondaryMinSize={500}
      onSecondaryPaneSizeChange={sizeChangeHandler}
    >
      <OrdersPanel />
      <Map />
    </SplitterLayout>
  );
};

export default App;
