import React from 'react';
import Heart from './Heart';

function CardHead(props) {
    return <div className="card-head">
        <h3>{props.streetInfo}</h3>
        <Heart />
    </div>
}

export default CardHead;