import React from 'react';
import './Home.scss';
import { Header } from "../../Components/Header/Header";
import { TargetProducts } from '../../Components/TargetProducts/TargetProducts';
import { products } from '../../constants/products';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';

export const Home = () => {
  return (
    <div className='div-catalogue'>
      <Header />
      <div>
        <div className='div-cart'>
          <FontAwesomeIcon className='icon-cart' icon={faCartArrowDown} />
          <h1 className='tittle-cart'>Carrito</h1>
          <button className='button-next-cart'><FontAwesomeIcon icon={faArrowRightLong} /></button>
        </div>
        <div>
          <div className='div-products'>
            <h1 className='tittle-catalogue'>Menú</h1>
            <div className='div-products-catalogue'>
              {products.map((d) => (
                // <ContainerUrl key={i} short={d.short} long={d.long} />
                <TargetProducts key={d.id} name={d.name} price={d.price} image={d.image} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
