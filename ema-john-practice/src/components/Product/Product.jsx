import React from 'react';
import './Product.css'

const Product = (props) => {
    const {ratings,name,price,seller,img,stock}=props.product
    return (
        <div>
             <div className="product-container">
       <img src={img} alt="image of products" />
       <h5>{name}</h5>
       <p>${price}</p>
       <p>{ratings} star</p>
       <button onClick={props.handleBuyNow} className='cart-button'>Buy Now</button>
            
    
            </div>
            
        </div>
    );
};

export default Product;