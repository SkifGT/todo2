import { DELETE_TODO } from './actionTypes'

const deleteTodo = (selectedItemId) => ({
  type: DELETE_TODO,
  payload: { id: selectedItemId },
});

export default deleteTodo