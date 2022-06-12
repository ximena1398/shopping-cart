import React from 'react';
import './QuantitySelector.scss';
import { UseCounterQuantity } from '../../Hooks/UseCounterQuantity';

export const QuantitySelector = () => {
    const [counter, increase, decrease] = UseCounterQuantity(1);

    return (
        <div className='div-selector'>
            <div className='div-quantity'>
                {counter}
            </div>
            <div className='div-main-signs' >
                <div className='div-signs-1' onClick={increase}>
                    +
                </div>
                <div className='div-signs-2' onClick={decrease}>
                    -
                </div>
            </div>
        </div>
    )
}
