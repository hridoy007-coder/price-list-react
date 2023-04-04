import React, { useEffect, useState } from 'react';
import PriceCart from '../PriceCart/PriceCart';

const PriceList = () => {
    const [prices, setPrices] = useState([]);

    useEffect(() => {
        fetch('price.json')
            .then(res => res.json())
            .then(data => setPrices(data))

    }, [])
    return (
        <div>
            <h2 className='text-5xl text-center font-bold mt-5'>Awesome Affordable Price</h2>
            <div className='grid grid-cols-3 gap-5'>
                {
                    prices.map(price => <PriceCart
                        key={price.id}
                        price={price}
                    ></PriceCart>)
                }
            </div>
        </div>
    );
};

export default PriceList;