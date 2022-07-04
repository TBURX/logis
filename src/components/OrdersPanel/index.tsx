import * as React from 'react';
import { Button, Space } from 'antd';
import { PlusOutlined, DeleteOutlined } from '@ant-design/icons';
import { useOrdersPanel } from './useOrdersPanel';
import Orders from '../Orders';
import './style.css';
import LangSwitch from '../LangSwitch';

const OrdersPanel: React.FC = () => {
  const { handleAddOrder, handleRemoveOrder } = useOrdersPanel();
  return (
    <div className="orders-panel">
      <Space direction="vertical">
        <Space>
          <Button onClick={handleAddOrder}>
            <PlusOutlined />
          </Button>
          <Button onClick={handleRemoveOrder}>
            <DeleteOutlined />
          </Button>
        </Space>
        <Orders />
        <LangSwitch />
      </Space>
    </div>
  );
};

export default OrdersPanel;
