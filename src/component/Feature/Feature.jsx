import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex gap-2 items-center'>
            <CheckCircleIcon className='h-4 w-4 text-white'/>
            <span>{feature}</span>
        </div>
    );
};

export default Feature;