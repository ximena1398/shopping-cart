import './TargetProducts.scss';
import { ModalProducts } from '../ModalProducts/ModalProducts';
import { UseModalProducts } from '../../Hooks/UseModalProducts';
import { agregarCaracter } from '../../Hooks/agregarCaracter';
import { ButtonAddCart } from '../ButtonAddCart/ButtonAddCart';

export const TargetProducts = ({ name, price, image }) => {
    const [isOpen, openModal, closeModal] = UseModalProducts(false);

    return (
        <div className='div-target'>
            <div className='div-target-img'>
                <img className='img' alt='' src={image} onClick={openModal} />
                <ModalProducts name={name} price={price} img={image} isOpen={isOpen} closeModal={closeModal} />
            </div>
            <div className='div-info'>
                <h1 className='tittle-target'>{name}</h1>
                <h2 className='price-target'>$ {agregarCaracter(price, ".", 3)}</h2>
            </div>
            <ButtonAddCart backgroundColor='black' fontSize='1.2vw' />
        </div>
    )
}
