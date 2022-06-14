// import React, { useState } from 'react';
import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
//   const [activeSearchInput, setactiveSearchInput] = useState(false);

//   const showSearchInput = () => {
//     setactiveSearchInput(true);
// };

  return (
    <div className='div-header'>
      <div>
        <FontAwesomeIcon className='icons' icon={faBars} />
      </div>
      <div className='div-header-2'>
        <h1 className='titulo-header'>Ricuras</h1>
      </div>
      <div className='div-icons'>
        <FontAwesomeIcon className='icons-search' icon={faMagnifyingGlass} />
        <input className='input-search'></input>
        <FontAwesomeIcon className='icons' icon={faShareNodes} />
      </div>
    </div>
  )
}
