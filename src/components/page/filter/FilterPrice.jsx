import React from 'react';

function FormPrice() {
    return <fieldset id="form-price" className="form-opt">
    <legend>Price</legend>
                    <div className="max-min">
                        <input id="price-min" name="price-min" type="number" min="0" max="5000000" step="10000" placeholder="min" />
                        &nbsp;-&nbsp;
                        <input id="price-max" name="price-max" type="number" min="0" max="5000000" step="10000" placeholder="max" />
                    </div>
                </fieldset>
}

export default FormPrice;