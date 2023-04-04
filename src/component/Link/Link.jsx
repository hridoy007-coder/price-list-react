import React from 'react';

const Link = ({route}) => {
     
    return (
        <div>
            <li className='font-bold mr-12 md:p-2 hover:bg-purple-600 hover:p-1'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;