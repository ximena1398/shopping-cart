import React from 'react';
import './TargetProducts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export const TargetProducts = ({name, price, image}) => {
    return (
        <div className='div-target'>
            <div className='div-target-img'>
                <img alt='' src={image} />
            </div>
            <div className='div-info'>
                <h1 className='tittle-target'>{name}</h1>
                <h2 className='price-target'>$ {price}</h2>
            </div>

            <button className='button-add-cart-main'><FontAwesomeIcon icon={faCartArrowDown} /> Añadir al carrito</button>
        </div>
    )
}
