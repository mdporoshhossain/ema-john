

import React from 'react';

// fortawesome start
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

/* import all the icons in Free Solid, Free Regular, and Brands styles */
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab)
// fortawesome ends

import './Prodact.css';
import { Link } from 'react-router-dom';
const Prodact = (props) => {
// console.log(props);
    const {name , img, seller, price, stock, key} = props.myProdact;


    return (
        <div>
            <div className='prodactItem'>
                <div className="prodactImg">
                    <img src={img} alt="" />
                </div>
                <div className="prodactDescription">
                    <h2><Link to={'/prodact/' + key}>{name}</Link></h2>
                    <p>by:{seller}</p>
                    <p>${price}</p>
                    <p>only {stock} left in stock - order soon</p>

                    {props.showAddToCart && <button className='add_to_cart btn btn-primary'
                    onClick={()=> props.add_to_cart_handler(props.myProdact)}
                    ><span><FontAwesomeIcon icon="fa-solid fa-cart-shopping" /></span>add to cart</button>}


                </div>
            </div> 
        </div>
    );
};

export default Prodact;