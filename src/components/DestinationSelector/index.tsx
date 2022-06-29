import * as React from 'react';
import { Select } from 'antd';
import 'antd/dist/antd.css';
import { points } from '../../constants';

const { Option } = Select;

interface IProps {
  onChange?: (value: string) => void;
}

const DestinationSelector: React.FC<IProps> = ({ onChange }) => {
  const handleChange = React.useCallback(
    (value: string) => {
      onChange?.(value);
    },
    [onChange],
  );

  return (
    <Select
      defaultValue={Object.keys(points)[0]}
      style={{ width: '120px' }}
      onChange={handleChange}
    >
      {Object.keys(points).map((name) => (
        <Option value={name}>{name}</Option>
      ))}
    </Select>
  );
};

export default DestinationSelector;
