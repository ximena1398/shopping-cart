import React from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
  return (
    <div className='div-header'>
      <div>
        <FontAwesomeIcon className='icons' icon={faBars} />
      </div>
      <div className='div-header-2'>
        <h1 className='titulo-header'>Ricuras</h1>
      </div>
      <div>
        <FontAwesomeIcon className='icons-search' icon={faMagnifyingGlass} />
        <FontAwesomeIcon className='icons' icon={faShareNodes} />
      </div>
    </div>
  )
}
