import React from 'react'

import { useDispatch} from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

import  deleteTodo  from '../redux/actions/deleteTodoActions' 
import  selectEditItem  from '../redux/actions/selectEditItem' 


function PropertyBar({props}) {

  const dispatch = useDispatch();
  return (
    <div className="property_bar__component">
      <button
        className="btn btn-secondary property_bar__button border-0"
        title="Edit"
        onClick={() => dispatch(selectEditItem(props.item.id))}
      >
        <FontAwesomeIcon icon={faEdit} size="sm" />
      </button>
      <button
        className="btn btn-danger property_bar__button border-0"
        title="Delete"
        onClick={() => dispatch(deleteTodo(props.item.id))}
      >
        <FontAwesomeIcon icon={faTrash} size="sm" />
      </button>
    </div>
  )
}

export default PropertyBar