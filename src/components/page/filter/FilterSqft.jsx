import React, {useState} from 'react';

function FilterSqft() {
    return <fieldset id="form-sqft" className="form-opt">
                <legend>Square Footage</legend>
                <div className="max-min">
                    <input id="sqft-min" name="sqft-min" type="number" min="0" max="10000" step="50" placeholder="min" />
                    &nbsp;-&nbsp;
                    <input id="sqft-max" name="sqft-max" type="number" min="0" max="10000" step="50" placeholder="max" />
                </div>
            </fieldset>
}

export default FilterSqft;