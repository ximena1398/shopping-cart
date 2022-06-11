import React from 'react';
import './QuantitySelector.scss';

export const QuantitySelector = () => {
  return (
    <div className='div-selector'>
        <div className='div-quantity'>
            1
        </div>
        <div className='div-main-signs'>
            <div className='div-signs-1'>
                +
            </div>
            <div className='div-signs-2'>
                -
            </div>
        </div>
    </div>
  )
}
