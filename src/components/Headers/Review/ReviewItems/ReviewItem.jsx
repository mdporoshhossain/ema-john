import React from 'react';

const review = (props) => {

    const {name, quantity, key, price} = props.Product;
    return (
        <div className='review_item' style={{borderBottom:'1px solid #000', marginBottom:'15px'}}>
            <h2>{name}</h2>
            <p>Quantity:{quantity}</p>
            <p>${price}</p>
            <button className='btn btn-primary '
            onClick={() => props.removeProdact(key)}
            >remove item</button>
        </div>
    );
};

export default review;