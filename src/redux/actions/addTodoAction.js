import { ADD_TODO } from './actionTypes'

const addTodo = (itemValue) => ({
  type: ADD_TODO,
  payload: { value: itemValue },
});

export default addTodo