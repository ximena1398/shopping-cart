import './Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

export const Header = () => {
  const [activeSearchInput, setactiveSearchInput] = useState(false);
  console.log(activeSearchInput);

  const showSearchInput = () => {
    setactiveSearchInput(true);
};

  return (
    <div className='div-header'>
      <div>
        <FontAwesomeIcon className='icons' icon={faBars} />
      </div>
      <div className='div-header-2'>
        <h1 className='titulo-header'>Ricuras</h1>
      </div>
      <div className='div-icons'>
        <FontAwesomeIcon onClick={showSearchInput} className='icons-search' icon={faMagnifyingGlass} />
        <input className = {`input-search-hidden ${activeSearchInput && "input-search"}`}></input>
        <FontAwesomeIcon className='icons' icon={faShareNodes} />
      </div>
    </div>
  )
}