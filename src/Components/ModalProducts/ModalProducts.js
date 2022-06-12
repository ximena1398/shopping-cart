import React from 'react';
import './ModalProducts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { QuantitySelector } from '../QuantitySelector/QuantitySelector';
import { agregarCaracter } from '../../Hooks/agregarCaracter';

export const ModalProducts = ({ name, price, isOpen, closeModal }) => {
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
                            <img className='img-main' alt='' src='https://images.aws.nestle.recipes/original/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660.png' />
                        </div>
                        <div className='modal-container-information-1-minimg'>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src='https://images.aws.nestle.recipes/original/bdac88d2b4d50e34c11b0e4c156c492b_Hamburguesa_con_queso.jpg' />
                            </div>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src='https://images.aws.nestle.recipes/original/bdac88d2b4d50e34c11b0e4c156c492b_Hamburguesa_con_queso.jpg' />
                            </div>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src='https://images.aws.nestle.recipes/original/bdac88d2b4d50e34c11b0e4c156c492b_Hamburguesa_con_queso.jpg' />
                            </div>
                            <div className='mini-img'>
                                <img className='img-mini-img' alt='' src='https://images.aws.nestle.recipes/original/bdac88d2b4d50e34c11b0e4c156c492b_Hamburguesa_con_queso.jpg' />
                            </div>
                        </div>
                    </div>
                    <div className='modal-container-information-2'>
                        <h1 className='text-tittle'>{name}</h1>
                        <div className='div-price'><p className='p-price'>$</p>{agregarCaracter(price, ".", 3)}</div>
                        <p className='text-description-product'>Nuestra hamburguesa extragrande tiene una mezcla de quesos cheddar y mozzarella, y tocino ahumado. Servida con lechuga, tomates, cebolla roja, pepinillos y mayonesa en un pan Kaiser tostado.</p>
                        <QuantitySelector />
                    </div>
                </div>
            </div>
        </article>
    );
}
