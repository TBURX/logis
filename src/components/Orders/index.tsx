import { Table } from 'antd';
import * as React from 'react';
import { useOrders } from './useOrders';
import './style.css';

const Orders: React.FC = () => {
  const { dataSource, onRow, columns } = useOrders();
  return <Table columns={columns} dataSource={dataSource} onRow={onRow} />;
};

export default Orders;
