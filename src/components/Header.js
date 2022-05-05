import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="app__header">
        <div className="header__container">
          <nav className="navbar">
            <span className="header__span navbar-brand">
            <FontAwesomeIcon className="d-inline-block" icon={faListAlt} size="lg" alt="List emoji" />
            </span>
            <span className="header__span">
              Todo App React with Redux
            </span>
          </nav>
        </div>
      </div>
  )
}

export default Header