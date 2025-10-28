
import React from 'react';

const cart = (props) => {

    const cart = props.cart;


    const totalPrice = cart.reduce((total , prodact) => total + prodact.price * prodact.quantity , 0);

      // Example calculations
  const shipping = totalPrice > 0 ? 10 : 0;
  const tax = totalPrice * 0.05;
  const grandTotal = totalPrice + shipping + tax;

    return (
        <div>
            <h2 className='bg-warning'>Order Summary</h2>
            <h3>Items ordered: {cart.length}</h3>
            <ul>
                <li>Items price: <span>${totalPrice.toFixed(2)}</span></li>
                <li>Shipping & Handling: <span>${shipping.toFixed(2)}</span></li>
                <li>Total before tax: <span>${(totalPrice + shipping).toFixed(2)}</span></li>
                <li>Estimated Tax: <span>${tax.toFixed(2)}</span></li>
                <li><strong>Order Total:</strong> <span>${grandTotal.toFixed(2)}</span></li>
                <br />
                {
                    props.children
                }
                </ul>


        </div>
    );
};

export default cart;