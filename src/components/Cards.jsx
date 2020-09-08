import React from 'react';
import properties from '../data/properties';

function Cards() {
    let property = properties[0];
    return <div className="property-card">
        <h3>{property.address.streetInfo}</h3>
        <img src={property.imgs[0].src} alt={property.imgs[0].alt} />
        <h3>{property.price}</h3>
        <div className="bd-br">
            <p>bed: {property.bedrooms}</p>
            <p>bath: {property.bathrooms}</p>
            <p>HOA: {property.HOA ? "Yes" : "No"}</p>
        </div>
        <p className="desc">{property.description.substring(0, 90)}... <a href="#">read more</a></p>
    </div>
}

export default Cards;