import * as React from 'react';
import SplitterLayout from 'react-splitter-layout';
import Map from './components/Map';
import OrdersPanel from './components/OrdersPanel';

const App: React.FC = () => (
  <SplitterLayout primaryMinSize={200} secondaryMinSize={500}>
    <OrdersPanel />
    <Map />
  </SplitterLayout>
);

export default App;
