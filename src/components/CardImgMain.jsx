import React from 'react';

function CardImgMain(props) {
    return <div className="img-main">
        {!props.HOA && <div className="no-hoa"><p>NO<br />HOA!</p></div>}
        <img src={props.mainImgSrc} alt={props.mainImgAlt} />
    </div>
}

export default CardImgMain;