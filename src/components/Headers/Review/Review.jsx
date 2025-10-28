import React, { useEffect, useState } from 'react';
import { getStoredCart, deleteFromDb, clearTheCart } from '../../fakedb';
import productJson from '../../Headers/Shop/products.json';
import ReviewItem from './ReviewItems/ReviewItem';
import CartPage from '../../cartPage/CartPage';
import HappyImg from '../../../assets/giphy.gif';
import './Review.css';
import { Link } from 'react-router-dom';

const Review = () => {
    const [cart, setCart] = useState([]);

    const removeProdact = (prodactKeyRemove) => {
        const newCart = cart.filter(pd => pd.key !== prodactKeyRemove);
        setCart(newCart);

        deleteFromDb(prodactKeyRemove);
    }
const [orderPlace , setOrderPlace] = useState(false);
const handlePlaceOrder = () =>{
    setCart([]);
    clearTheCart();
    setOrderPlace(true);
}


    // useEffect(() => {
    //     const savedData = getStoredCart(); // { "B001": 2, "B002": 1 }
    //     const productKeys = Object.keys(savedData);
    //     const cartProducts = productKeys.map((key) => {
    //         const product = productJson.find((pd) => pd.key === key);
    //         if (product) {
    //             product.quantity = savedData[key];
    //             return product;
    //         }

    //     });
    //     setCart(cartProducts); // ✅ update cart state
    // }, []);

useEffect(() => {
    const saveData = getStoredCart();
    const prodactKeys = Object.keys(saveData);
    const cartProdact = prodactKeys.map((exitkey) => {
        const prodact = productJson.find(pd => pd.key === exitkey);
        if(prodact){
            prodact.quantity = saveData[exitkey];
            return prodact;
        }
    });
    setCart(cartProdact);
}, []);


let thankyou;
if(orderPlace) {
    thankyou = <img src={HappyImg} alt="" />
}
    return (
        <div className='review_page'>

                        

            <div className="prodact_container">
                <h4>Saved Items: {cart.length}</h4>
                
                {
                    cart.map(pd => <ReviewItem
                        removeProdact={removeProdact}
                        key={pd.key}
                        Product={pd}
                    ></ReviewItem>)
                }
                {
                    thankyou
                }
            </div>
            <div className="cart_container">
                <h2>cart</h2>
                <CartPage
                 cart= {cart}
                 >
                    <Link><button onClick={handlePlaceOrder} className='btn btn-primary'>Place Order</button></Link>
                 </CartPage>
            </div>

        </div>
    );
};

export default Review;
