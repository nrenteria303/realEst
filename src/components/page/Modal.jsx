import React from 'react';
import CloseIcon from '@material-ui/icons/Close';

function Modal(props) {

    function handleCloseClick() {
        props.passCloseToApp();
        document.querySelector(".modal-cont").scrollTop = 0;
    }

    // let dotDivs = [];

    // function handleDotClick(index) {
    //     props.dotClick(index)
    // }

    // function outputDots(numImgs) {
    //     for (let i = 0; i < numImgs; i++) {
    //         dotDivs.push(<div onClick={handleDotClick(i)} className="nav-dot" key={i}></div>);
    //     }
    //     return dotDivs;
    // }

    function navLeft() {
        props.imgNavLeft();
    }

    function navRight() {
        props.imgNavRight();
    }

    return <div id="modal-outer" className={props.isShowing ? "modal-showing" : "modal-hidden"}>
        <div className="modal-cont">
            <CloseIcon onClick={handleCloseClick} />
            <div id="modal-img-address">
                <div className="modal-img-cont">
                    <div id="modal-img-left" onClick={navLeft}>&#10094;</div>
                    <div id="modal-img-right" onClick={navRight}>&#10095;</div>
                    <img id="img-display" src={props.imgSrc} alt={props.imgAlt} />
                    <div id="img-nav-dots">
                        {/* {outputDots(props.imgCount)} */}
                    </div>
                </div>
                <div className="modal-address">
                    <p>{props.streetInfo}</p>
                    <p>{props.city}, {props.state} {props.zip}</p>
                </div>
            </div>
            <div id="modal-details-desc">
                <h3>At a Glance</h3>
                <div className="modal-details">
                    <p><strong>Asking Price:</strong> {props.price}</p>
                    <p><strong>Square Footage:</strong> {props.sqft}</p>
                    <p><strong>Bedrooms:</strong> {props.beds}</p>
                    <p><strong>Bathrooms:</strong> {props.baths}</p>
                    <p><strong>HOA Controlled:</strong> {props.HOA}</p>
                </div>
                <p className="modal-desc">{props.description}</p>
                <p className="modal-call"><strong>Call:</strong> (303) 323-5033</p>
            </div>
        </div>
    </div>;
}

export default Modal;