import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus  } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';
import addTodo from '../redux/actions/addTodoAction'

function Form() {
  const dispatch = useDispatch();

  const [itemValue, setItemValue] = React.useState('');

  const handleSubmitResetForm = (ev) => {
    ev.preventDefault();
    setItemValue(itemValue);
    dispatch(addTodo(itemValue))

    //reset form value
    setItemValue('');
  }

  const handleItemChange = ev => setItemValue(ev.target.value);

  return (
    <form method="post" 
          autoComplete="on"
          onSubmit={handleSubmitResetForm}>
      <div className="row">
        <div className="col-auto p-0">
          <input 
            type="text" 
            className="form-control" 
            id="new-todo-item" 
            name="new-todo-item" 
            placeholder="I want to do..." 
            aria-label="Todo item description" 
            value={itemValue}
            onChange={handleItemChange}
            />
        </div>
        <div className="col-auto">
          <button 
            type="submit" 
            className="btn btn-primary" 
            title="Add todo item" 
            aria-label="Add todo item" 
            disabled={!itemValue}>
          <FontAwesomeIcon icon={faPlus} />
          </button>
        </div>
      </div>
    </form>
  )
}

export default Form