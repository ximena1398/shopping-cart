import './TargetProducts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ModalProducts } from '../ModalProducts/ModalProducts';
import { UseModalProducts } from '../../Hooks/UseModalProducts';

export const TargetProducts = ({ name, price, image }) => {
    const [isOpen, openModal, closeModal] = UseModalProducts(false);

    return (
        <div className='div-target'>
            <div className='div-target-img'>
                <img className='img' alt='' src={image} onClick={openModal} />
                <ModalProducts isOpen={isOpen} closeModal={closeModal} />
            </div>
            <div className='div-info'>
                <h1 className='tittle-target'>{name}</h1>
                <h2 className='price-target'>$ {price}</h2>
            </div>

            <button className='button-add-cart-main'><FontAwesomeIcon icon={faCartArrowDown} /> Añadir al carrito</button>
        </div>
    )
}
