import React from 'react';

function CardDetails(props) {
    function usdFilter(int) {
        let arr = int.toString().split("");
        arr.splice(arr.length - 3, 0, ",");
        if (arr.length > 7) {
            arr.splice(arr.length - 7, 0, ",");
            if (arr.length > 11) {
                arr.splice(arr.length - 11, 0, ",");
            }
        }
        return "$" + arr.join("");
    }

    return <div className="card-details">
        <h3 className="price">{usdFilter(props.price)}</h3>
        <div className="bd-br">
            <p>bed: {props.bedrooms}</p>
            <p>bath: {props.bathrooms}</p>
            <p>sqft: {props.sqft}</p>
        </div>
        <p className="desc">{props.description}... <a href="#">read more</a></p>
    </div>
}

export default CardDetails;