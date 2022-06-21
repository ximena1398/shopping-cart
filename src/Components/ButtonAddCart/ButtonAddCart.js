import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import './ButtonAddCart.scss';

export const ButtonAddCart = ({backgroundColor, fontSize}) => {
  return (
    <>
      <button style={{backgroundColor: backgroundColor, fontSize: fontSize}} className='button-add-cart-main'><FontAwesomeIcon icon={faCartArrowDown} /> Añadir al carrito</button>
    </>
  )
}
