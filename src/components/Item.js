import React from 'react'
import { useDispatch } from 'react-redux';

import  itemComplition  from '../redux/actions/itemComplition'


import Chekout from './Chekout';
import PropertyBar from './PropertyBar';

function Item(props) {
  const [displayMenu, setDisplayMenu] = React.useState(false)

  const dispatch = useDispatch();
  
  const updateDisplayMenu = bool => {
    if (displayMenu !== bool) {
      setDisplayMenu(bool);
    }
  };

  let liClass = 'form_item__component list-group-item form-control';
      liClass = props.item.completed ? liClass + ' form_item__component-completed' : liClass;

  return (
    <li 
    className={liClass}
    onMouseOver={()=> updateDisplayMenu(true)}
    onMouseLeave = {()=> updateDisplayMenu(false)}
    >
      <div 
        className="text-truncate"
        onClick={() => dispatch(itemComplition(props))}>
        <div className="form_item__checkout d-inline-block">
          <Chekout completed={props.item.completed}/>
        </div>
        <span className="form_item__text">
          {props.item.value}
        </span>
        {displayMenu ? <PropertyBar props={props} /> : null}
      </div>
    </li>
  )
}

export default Item