import React from 'react';
import usdFilter from './usdFilter';

function CardDetails(props) {

    function deployModal() {
        props.passModalToCard();
    }

    return <div className="card-details">
        <h3 className="price">{usdFilter(props.price)}</h3>
        <div className="bd-br">
            <p>bed: {props.bedrooms}</p>
            <p>bath: {props.bathrooms}</p>
            <p>sqft: {props.sqft}</p>
        </div>
        <p className="desc">{props.description}... 
            <button onClick={deployModal} className="read-more">read more</button>
        </p>
    </div>
}

export default CardDetails;