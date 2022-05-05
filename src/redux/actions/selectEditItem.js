import { SELECT_EDIT_ITEM } from './actionTypes'

const selectEditItem = (id) => ({
  type: SELECT_EDIT_ITEM,
  payload: { id },
});

export default selectEditItem