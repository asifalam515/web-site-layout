import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
const[products,setProducts]=useState([])
const [cart,setCart]=useState(0)
useEffect(()=>{
fetch('products.json')
.then(res=>res.json())
.then(data=>setProducts(data))
},[])

const handleBuyNow=(e)=>{
    setCart(cart+1)
}
    return (
        <div className='shop-container'>
            
         <div className='product-section'>
         {
                products.map(product=><Product handleBuyNow={handleBuyNow} product={product}></Product>)
                
            }
         </div>
         <div className='cart-section'>
            <h1>Order Summary</h1>
            <h4>Cart Item: {cart}</h4>
         </div>
           
        </div>
    );
};

export default Shop;