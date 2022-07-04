import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import selectors from '../../store/app/selectors';
import { actions } from '../../store/app/slice';

export const useOrdersPanel = () => {
  const dispatch = useDispatch();
  const selectedOrderindex = useSelector(selectors.selectedOrderindex);
  const handleAddOrder = useCallback(async () => {
    dispatch(actions.addOrder());
  }, []);
  const handleRemoveOrder = useCallback(async () => {
    if (selectedOrderindex !== undefined) {
      dispatch(actions.removeOrderAtIndex(selectedOrderindex));
      dispatch(actions.setPolyline([]));
      dispatch(actions.setSelectedOrderIndex(undefined));
    }
  }, [selectedOrderindex]);
  return {
    handleAddOrder,
    handleRemoveOrder,
  };
};
