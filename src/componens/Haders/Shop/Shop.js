import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import Cart from '../../Cart/Cart';
import Product from '../Product/Product'

import './Shop.css';
const Shop = () => {
        const fasts10 = fakeData.slice(0, 15);
        const [product, setProducts] = useState(fasts10);
        const [cart, setCart] = useState([])
        
        const handleAddProduct = (product) =>{
            console.log('product add', product);
            const newCart = [...cart, product];
            setCart(newCart);
        }

        return ( 
            <div className = "shop-container">
                <div className = "product-container">
                        {
                        product.map(Pd =><Product
                            handleAddProduct = {handleAddProduct}
                            Product={Pd}
                            >{product}
                            </Product>)
                        } 
                </div>
                    
                    <h1></h1>
                    <div className ="cart-container">
                        <Cart cart = {cart}></Cart>
                    </div>
                </div>
                
            );
        };
        export default Shop;