import React, { useEffect, useState } from 'react';
import './Shop.css';
import Prodact from './Prodact/Prodact';
import prodactJson from './products.json';
import CartPage from '../../cartPage/CartPage';
import { Link } from 'react-router-dom';
import { addToDb, getStoredCart } from '../../fakedb';


const Shop = () => {
    const [prodacts , setProdacts] = useState(prodactJson); 

    const [cart , setCart] = useState([]);


    useEffect(() => {
        const saveCart = getStoredCart();
        const prodactKeys = Object.keys(saveCart);
        const priveusKey = prodactKeys.map(exitingKey =>{
            const prodactI = prodactJson.find(pd => pd.key == exitingKey);

            if (prodactI) {
                prodactI.quantity = saveCart[exitingKey];
                return prodactI;
            }
        });
        setCart(priveusKey);
       
    },[]);

// add_to_cart_handler
    const add_to_cart_handler = (prodact) =>{
        const toBeadded = prodact.key;
        const someProdact = cart.find(pd => pd.key === toBeadded);

            let count = 1;
            let newCart;
            if(someProdact){
                 count = someProdact.quantity + 1;
                someProdact.quantity = count;
                const other = cart.filter(pd => pd.key !== toBeadded);
                newCart = [...other, someProdact];
            }
            else{
                prodact.quantity = 1;
                newCart = [...cart, prodact];
            }

        setCart(newCart);

        addToDb(prodact.key, count);
    }
    // add_to_cart_handler
    return (
        <div>
            <div className="shop_area">
                <div className="container">
                    <div className="shop_container">
                        <div className="Shop_item">
                            {
                                prodacts.map(prodactItem => <Prodact
                                    
                                    key={prodactItem.key}
                                    showAddToCart = {true} 
                                    myProdact={prodactItem}
                                    add_to_cart_handler = {add_to_cart_handler}
                                    ></Prodact>)
                            }
                        </div>
                        <div className="order_summary_container">
                           <CartPage 
                           cart={cart}>
                                <Link to='/review'>
                                <button className='btn btn-primary '>Review your order</button>
                                </Link>
                           </CartPage>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shop;