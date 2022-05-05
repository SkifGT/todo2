import { ITEM_COMPLITED } from './actionTypes'


const itemComplition = (modifiedItem) => ({
  type: ITEM_COMPLITED,
  payload: { modifiedItem },
});

export default itemComplition