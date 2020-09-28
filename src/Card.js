import React from 'react';
import './Card.css';
import StarBorderIcon from '@material-ui/icons/StarBorder';

function Card({src, name, price}) {
    return (
        <div className="card">
            <a href="#">
            <img className="watch" src={src}/>
            <h1 className="name">{name}</h1>
            <div className="stars"><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/><StarBorderIcon/></div>
            <h1 className="price">{price}</h1>
            </a>
        </div>
    )
}

export default Card
