import React from 'react';
import './Product.css';

function Product() {
    return (
        <div className="product">
            <img src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/5.jpeg&maxx=300&maxy=0"/>
            <div>
                <h1>Black Dior VIII Grand</h1>
                <h1 style={{color: "lightgreen", fontSize: "16px"}}>Ships in 24 Hours. Free Shipping.</h1>
                <h1 style={{color: "red"}}>$76.99</h1>
                <h1 style={{fontSize: "16px"}}>You Save:$23.00 (23%)</h1>
                <h1 style={{fontSize: "16px"}}>Write a Review</h1>
                <div className="quantity"><h1 style={{color:"gray", fontSize: "16px"}}>Quantity</h1>
                <input placeholder="1"></input></div>
                <button>Add To Cart</button>
            </div>
        </div>
    )
}

export default Product
