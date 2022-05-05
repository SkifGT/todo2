import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';

import { useDispatch } from 'react-redux';

import  editItem  from '../redux/actions/editItemAction';
import  cancelEditItem  from '../redux/actions/editItemAction'

function ItemEdit({item}) {
console.log(item);
  const dispatch = useDispatch();

  const [itemValue, setItemValue] = React.useState(item.value);
  
  React.useEffect(() => {
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  const handleKeyUp = ev => {
    // Handle ESC Key interaction
    if (ev.code === 'Escape') {
      dispatch(cancelEditItem(ev));
    }
  };

  const handleItemChange = ev => setItemValue(ev.target.value);

  const handleEditAndResetForm = ev => {
    ev.preventDefault();

    dispatch(editItem({
      ...item,
      value: itemValue,
    }));

    // Reset value
    setItemValue('');
  };

  return (
    <li className="form_edit__component list-group-item">
      <form method="POST" 
      onSubmit={handleEditAndResetForm}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="input-edit-todo-item"
            name="edit-todo-item"
            value={itemValue}
            onChange={handleItemChange}
            autoFocus
          />
          <button
            type="submit"
            id="submit-edit-todo-item"
            className="btn btn-primary mx-2 rounded-3"
            disabled={!itemValue}
            >
            <FontAwesomeIcon icon={faCheck} size="sm" />
          </button>
          <button
            id="cancel-edit-todo-item"
            type="button"
            className="btn btn-danger me-2 rounded-3"
            onClick={() => dispatch(cancelEditItem())}
            >
            <FontAwesomeIcon icon={faTimes} size="sm" />
          </button>
        </div>
      </form>
    </li>
  )
}

export default ItemEdit