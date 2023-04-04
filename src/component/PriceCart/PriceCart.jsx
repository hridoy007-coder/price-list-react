import React from 'react';

const PriceCart = ({price}) => {
    return (
        <div className='bg-purple-400 p-5 rounded-2xl mt-10'>
            <h2>
                <span className='text-5xl font-bold text-white'>{price.price}</span>
                <span className='text-2xl  text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold mb-5'>{price.name}</h5>
            <p>Feature:</p>
            {
                price.features.map(feature=> <li>{feature}</li>)
            }
        </div>
    );
};

export default PriceCart;