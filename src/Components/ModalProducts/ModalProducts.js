import React from 'react';
import './ModalProducts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { agregarCaracter } from '../../Hooks/agregarCaracter';
import { ButtonAddCart } from '../ButtonAddCart/ButtonAddCart';

export const ModalProducts = ({ name, price, img, isOpen, closeModal }) => {
    //controlar que cuando se de click en el contendor del modal no se cierre (e.stopPropagation(): evita los eventos en el contenedor) 
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
        // la clase modal la tiene que tener, sin embargo la clase is-open solo se ejecitara cuando la propiedad isOpen sea verdadera, por lo que cuando eso ocurra se agregará la clase is-open
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <div className='div-button-close'>
                    <button className="button-modal-close" onClick={closeModal}>
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                </div>
                <div className='modal-container-information'>
                    <div className='modal-container-information-1'>
                        <div className='modal-container-information-1-img'>
                            <img className='img-main' alt='' src={img} />
                        </div>
                        <div className='modal-container-information-1-minimg'>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src={img} />
                            </div>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src={img} />
                            </div>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src={img} />
                            </div>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src={img} />
                            </div>
                        </div>
                    </div>
                    <div className='modal-container-information-2'>
                        <h1 className='text-tittle'>{name}</h1>
                        <div className='div-price'><p className='p-price'>$</p>{agregarCaracter(price, ".", 3)}</div>
                        <p className='text-description-product'>Nuestra hamburguesa extragrande tiene una mezcla de quesos cheddar y mozzarella, y tocino ahumado. Servida con lechuga, tomates, cebolla roja, pepinillos y mayonesa en un pan Kaiser tostado.</p>
                        <QuantitySelector />
                        <div className='div-button'>
                            <ButtonAddCart backgroundColor='#ff5b00' fontSize='1.5vw' />
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}
