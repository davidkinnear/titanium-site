import React, {useRef, useEffect} from 'react';
import './Header.css';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {TweenMax, Power3, TimelineLite} from 'gsap';

function Header() {
    let header = useRef(null);
    let logo = useRef(null);
    let headerRight = useRef(null);

    let tl = new TimelineLite()

    useEffect(() => {
        TweenMax.to(header, 0, {css:{visibility:'visible'}})

        tl.from(logo, 1.5, {x:-270, ease: Power3.easeOut})
        .from(headerRight, 1.5, {x:220, ease: Power3.easeOut},0)
    })
    return (
        <div ref={el => header = el} className="header">
            <a href="#"><img ref={el => logo = el} className="logo" src="https://dev-titanium-demo-com.3dcartstores.com/assets/images/logo.jpg"/></a>
            <ul className="menu">
                <li><a href="#">CATEGORIES</a></li>
                <li><a href="#">MEN</a></li>
                <li><a href="#">WOMEN</a></li>
                <li><a href="#">TOP SALE</a></li>
                <li><a href="#">BLOG</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
            <a className="header_right_a" href="#">
            <div ref={el => headerRight = el} className="header_right">
            <FavoriteBorderIcon className="heart"/>
            <SearchIcon className="search"/>
            <ShoppingCartIcon className="cart"/>
            </div>
            </a>
        </div>
    )
}

export default Header
