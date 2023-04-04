import React from 'react';
import Feature from '../Feature/Feature';

const PriceCart = ({ price }) => {
    return (
        <div className='bg-purple-400 p-5 rounded-2xl mt-10'>
            <h2>
                <span className='text-5xl font-bold text-white'>{price.price}</span>
                <span className='text-2xl  text-white'>/mon</span>
            </h2>
            <h5 className='text-2xl font-bold mb-5'>{price.name}</h5>
            <p className='underline font-bold text-white text-2xl'>Feature:</p>
            {
                price.features.map((feature, idx) => <Feature
                    key={idx}
                    feature={feature}
                ></Feature>)
            }
            <button className='w-full mt-auto bg-white  hover:bg-purple-700 hover:text-white py-2 rounded-2xl font-extrabold text-2xl mt-4 '>Buy Now</button>
        </div>
    );
};

export default PriceCart;