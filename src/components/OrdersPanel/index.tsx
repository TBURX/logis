import * as React from 'react';
import { Button } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useOrdersPanel } from './useOrdersPanel';
import Orders from '../Orders';
import './style.css';

const OrdersPanel: React.FC = () => {
  const { handleAddOrder, handleRemoveOrder } = useOrdersPanel();
  return (
    <div className="orders-panel">
      <div className="orders-buttons">
        <Button onClick={handleAddOrder}>
          <PlusOutlined />
        </Button>
        <Button onClick={handleRemoveOrder}>
          <DeleteOutlined />
        </Button>
      </div>
      <Orders />
    </div>
  );
};

export default OrdersPanel;
