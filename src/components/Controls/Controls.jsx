import React from 'react';
import Builder from './Builder/Builder';
import "./Controls.css"


const products = [
    { title: 'Product 1', type: 'product 1' },
    { title: 'Product 2', type: 'product 2' },
    { title: 'Product 3', type: 'product 3' },
    { title: 'Product 4', type: 'product 4' },
]

const Controls = () => {
    return ( 
        <div className='controls'>
            {products.map((item) => {
                return <Builder title={item.title} key={item.title} />
            })}
        </div>
     );
}

export default Controls;