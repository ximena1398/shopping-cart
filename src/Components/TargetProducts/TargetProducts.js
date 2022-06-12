import './TargetProducts.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ModalProducts } from '../ModalProducts/ModalProducts';
import { UseModalProducts } from '../../Hooks/UseModalProducts';
import { agregarCaracter } from '../../Hooks/agregarCaracter';

export const TargetProducts = ({ name, price, image }) => {
    const [isOpen, openModal, closeModal] = UseModalProducts(false);

    return (
        <div className='div-target'>
            <div className='div-target-img'>
                <img className='img' alt='' src={image} onClick={openModal} />
                <ModalProducts name={name} price={price} isOpen={isOpen} closeModal={closeModal} />
            </div>
            <div className='div-info'>
                <h1 className='tittle-target'>{name}</h1>
                <h2 className='price-target'>$ {agregarCaracter(price, ".", 3)}</h2>
            </div>

            <button className='button-add-cart-main'><FontAwesomeIcon icon={faCartArrowDown} /> Añadir al carrito</button>
        </div>
    )
}
