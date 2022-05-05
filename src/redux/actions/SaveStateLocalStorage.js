import { SAVE_STATE_LOCALSTORAGE } from './actionTypes'

const SaveStateLocalStorage = state => ({
  type: SAVE_STATE_LOCALSTORAGE,
  payload: { state },
});

export default SaveStateLocalStorage