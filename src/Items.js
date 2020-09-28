import React from 'react';
import './Items.css';
import Card from './Card';
import { Link } from "react-router-dom";


function Items() {
    return (
        <div className="items">
            <center><h1 className="items_title">POPULAR ITEMS</h1></center>
            <div className="items_content">
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/5.jpeg&maxx=300&maxy=0"
            name="Black Dior VIII Grand" 
            price="$76.99"/>
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/14.jpeg&maxx=300&maxy=0"
            name="Ladies' Sheer V-Neck Watch" 
            price="$16.99"/>
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/9.jpeg&maxx=300&maxy=0"
            name="Michael Kors Leather Strap" 
            price="$38.99"/>
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/3.jpeg&maxx=300&maxy=0"
            name="Michael kors sawyer watch" 
            price="$12.99"/>
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/4.jpeg&maxx=300&maxy=0"
            name="The Classic Unisex Watch" 
            price="$24.99"/>
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/6.jpeg&maxx=300&maxy=0"
            name="The horse Gold & Black" 
            price="$14.99"/>
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/2.jpeg&maxx=300&maxy=0"
            name="The Original Unisex Watch" 
            price="$16.99"/>
            <Card
            src="https://dev-titanium-demo-com.3dcartstores.com/thumbnail.asp?file=assets/images/7.jpg&maxx=300&maxy=0"
            name="Tri-Tone Bradshaw Watch" 
            price="$34.99"/>
            </div>
        </div>
    )
}

export default Items
