import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';

function Chekout({completed}) {
  return (
    <span>
      {completed ? (
        <FontAwesomeIcon icon={faCheckSquare} size="2x" />
          ) : (
        <FontAwesomeIcon icon={faSquare} size="2x" />
      )}
    </span>
  )
}

export default Chekout