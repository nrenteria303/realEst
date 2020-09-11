import React from 'react';
import properties from '../data/properties';
import CardHead from './CardHead';

function Cards(props) {
    // let property = properties[0];
    return <div className="property-card">
        <CardHead streetInfo={props.streetInfo} />
        <img src={props.mainImgSrc} alt={props.mainImgAlt} />
        <h3 className="price">{props.price}</h3>
        <div className="bd-br">
            <p>bed: {props.bedrooms}</p>
            <p>bath: {props.bathrooms}</p>
            <p>HOA: {props.HOA ? "Yes" : "No"}</p>
        </div>
        <p className="desc">{props.description.substring(0, 84)}... <a href="#">read more</a></p>
    </div>
}

export default Cards;