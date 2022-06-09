import React from 'react';
import './ModalProducts.scss';

export const ModalProducts = ({ isOpen, closeModal }) => {
    //controlar que cuando se de click en el contendor del modal no se cierre (e.stopPropagation(): evita los eventos en el contenedor) 
    const handleModalContainerClick = (e) => e.stopPropagation();

    return (
        // la clase modal la tiene que tener, sin embargo la clase is-open solo se ejecitara cuando la propiedad isOpen sea verdadera, por lo que cuando eso ocurra se agregará la clase is-open
        <article className={`modal ${isOpen && "is-open"}`} onClick={closeModal}>
            <div className="modal-container" onClick={handleModalContainerClick}>
                <div>
                    <button className="modal-close" onClick={closeModal}>
                        X
                    </button>
                </div>
                <div className='modal-container-information'>
                    <div className='modal-container-information-1'>
                        <div className='modal-container-information-1-img'>
                            <img className='img-main' alt='' src='https://images.aws.nestle.recipes/original/8689e8d974203563ddcc9bbff91323c2_MG_CHORIZOBURGER_Main-880x660.png' />
                        </div>
                    </div>
                    <div>
                        <h1>Holi</h1>
                    </div>
                </div>
            </div>
        </article>
    );
}
