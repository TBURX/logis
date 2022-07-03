import * as React from 'react';
import { Select } from 'antd';
import { useDispatch } from 'react-redux';
import { defaultPointName, points } from '../../constants';
import { actions } from '../../store/app/slice';

const { Option } = Select;

const DestinationSelector: React.FC = () => {
  const dispatch = useDispatch();
  const handleChange = React.useCallback((val: string) => {
    dispatch(actions.setLatlng(points.filter((p) => p.name === val)[0].latlng));
  }, []);

  return (
    <Select defaultValue={defaultPointName} style={{ width: '120px' }} onChange={handleChange}>
      {points.map((p) => {
        const { name } = p;
        return <Option value={name}>{name}</Option>;
      })}
    </Select>
  );
};

export default DestinationSelector;
