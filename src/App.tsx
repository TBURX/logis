import * as React from 'react';
import SplitterLayout from 'react-splitter-layout';
import Map from './components/Map';
import OrdersPanel from './components/OrdersPanel';

const App: React.FC = () => (
  <SplitterLayout>
    <OrdersPanel />
    <Map />
  </SplitterLayout>
);

export default App;
