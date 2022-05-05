import { EDIT_ITEM } from './actionTypes'

const editItem = (modifiedItem) => ({
  type: EDIT_ITEM,
  payload: { modifiedItem },
});

export default editItem