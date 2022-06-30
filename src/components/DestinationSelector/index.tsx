import * as React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { defaultPointName, points } from '../../constants';
import { actions } from '../../store/app/slice';

const { Option } = Select;

const DestinationSelector: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = React.useCallback((val: string) => {
    dispatch(actions.setLatlng(points[val]));
  }, []);

  return (
    <Select defaultValue={defaultPointName} style={{ width: '120px' }} onChange={handleChange}>
      {Object.keys(points).map((name) => (
        <Option value={name}>{name}</Option>
      ))}
    </Select>
  );
};

export default DestinationSelector;
