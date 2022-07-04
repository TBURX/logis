import { ColumnType } from 'antd/lib/table';
import { GetComponentProps } from 'rc-table/lib/interface';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { orderActions } from '../../saga/order';
import selectors from '../../store/app/selectors';
import { IOrderRow } from '../../types';
import DestinationSelector from '../DestinationSelector';

export const useOrders = () => {
  const dispatch = useDispatch();
  const orders = useSelector(selectors.orders);
  const selectedOrder = useSelector(selectors.selectedOrderindex);
  const handleFromChange = (value: string, index: number) => {
    dispatch(orderActions.setOrderFrom({ value, index }));
  };
  const handleToChange = (value: string, index: number) => {
    dispatch(orderActions.setOrderTo({ value, index }));
  };
  const dataSource: IOrderRow[] = orders.map((order, index) => ({
    from: (
      <DestinationSelector
        value={order.from.name}
        onChange={(value) => handleFromChange(value, index)}
        key={`${index}-from`}
      />
    ),
    to: (
      <DestinationSelector
        value={order.to.name}
        onChange={(value) => handleToChange(value, index)}
        key={`${index}-to`}
      />
    ),
    index,
  }));
  const onRow: GetComponentProps<IOrderRow> = (row) => ({
    onClick: () => {
      dispatch(orderActions.setOrderIndex(row.index));
    },
    className: row.index === selectedOrder ? 'selected' : '',
  });
  const columns: ColumnType<IOrderRow>[] = [
    {
      title: 'точка погрузки',
      dataIndex: 'from',
      key: 'from',
    },
    {
      title: 'точка выгрузки',
      dataIndex: 'to',
      key: 'to',
    },
  ];
  return {
    dataSource,
    handleFromChange,
    handleToChange,
    onRow,
    columns,
  };
};
