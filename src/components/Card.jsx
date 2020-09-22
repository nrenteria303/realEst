import React from 'react';
import CardHead from './CardHead';
import CardDetails from './CardDetails';
import CardImgMain from './CardImgMain';

function Cards(props) {

    function deployModal() {
        props.passModalToApp();
    }

    return <div className="property-card">
        <CardHead streetInfo={props.streetInfo} />
        <CardImgMain 
            HOA={props.HOA} 
            mainImgSrc={props.mainImgSrc} 
            mainImgAlt={props.mainImgAlt} />
        <CardDetails
            price={props.price}
            bedrooms={props.bedrooms}
            bathrooms={props.bathrooms}
            sqft={props.sqft}
            description={props.description.substring(0, 80)}
            passModalToCard={deployModal}
        />
    </div>
}

export default Cards;