import React, {useState} from 'react';

function FilterSqft(props) {
    const [sqft, setSqft] = useState({
        sqftMin: "",
        sqftMax: ""
    });

    function handleChange(e) {
        const {name, value} = e.target;
        setSqft(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function submitSqft() {
        props.passToFilterForm(parseInt(sqft.sqftMin, 10), parseInt(sqft.sqftMax, 10));
    }

    return <fieldset onBlur={submitSqft} id="form-sqft" className="form-opt">
                <legend>Square Footage</legend>
                <div className="max-min">
                    <input 
                        id="sqft-min" 
                        name="sqftMin" 
                        type="number" 
                        min="0" 
                        max="10000" 
                        step="50" 
                        placeholder="min" 
                        onChange={handleChange}
                    />
                    &nbsp;-&nbsp;
                    <input 
                    id="sqft-max" 
                    name="sqftMax" 
                    type="number" 
                    min="0" 
                    max="10000" 
                    step="50" 
                    placeholder="max" 
                    onChange={handleChange}
                />
                </div>
            </fieldset>
}

export default FilterSqft;