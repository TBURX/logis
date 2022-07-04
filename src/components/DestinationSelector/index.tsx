import * as React from 'react';
import { Select } from 'antd';
import { defaultPointName, points } from '../../constants';

const { Option } = Select;

interface IProps {
  value?: string;
  onChange?: (value: string) => void;
  key: string;
}

const DestinationSelector: React.FC<IProps> = ({ value, onChange, key }) => {
  const handleChange = React.useCallback((val: string) => {
    onChange?.(val);
  }, []);

  return (
    <Select
      defaultValue={defaultPointName}
      value={value}
      style={{ width: '100%' }}
      onChange={handleChange}
      key={key}
    >
      {points.map((p) => {
        const { name } = p;
        return <Option value={name}>{name}</Option>;
      })}
    </Select>
  );
};

export default DestinationSelector;
