import { REORDER_ITEM } from './actionTypes'


const ReorderItem = (initialPosition, newPosition) => ({
  type: REORDER_ITEM,
  payload: { initialPosition, newPosition },
});

export default ReorderItem;