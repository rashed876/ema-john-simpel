import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart);
  //const totalPrice = cart.reduce ((total, prd) => total + prd.price, 0);
    let totalPrice = 0; 
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        totalPrice = totalPrice + product.price;
        
    }

    let shoPing = 0;
    if (totalPrice > 35) {
        shoPing = 4.99;
    }
    else if(totalPrice > 15){
    shoPing = 10.99;
    }
    else if (totalPrice > 0){
        shoPing = 12.99;
    }
    
    const tex = (totalPrice / 10).toFixed(2);
    const granTotal =  (totalPrice + shoPing + Number(tex)).toFixed(2);
    const formetNumber = nam => {
        const prsision = nam.toFixed(2);
        return Number(prsision);
    }

    return (
        <div>
            <h3>oder summary:</h3>
            <p>product price:{formetNumber(totalPrice)}</p>
            <p>Item Ordered:{cart.length}</p>
            <p><small>shiiping cost: {shoPing}</small></p>
            <p><small>tex + vat: {tex}</small></p>
            
            <p>total price: {granTotal}</p>
        </div>
    );
};

export default Cart;