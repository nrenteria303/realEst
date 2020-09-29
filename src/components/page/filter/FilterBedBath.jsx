import React, {useState} from 'react';

function FilterBedBath(props) {
    const [bedBathValues, setBedBathValues] = useState(
        {
            bedsMin: 1,
            bathsMin: 1
        }
    );

    function handleChange(e) {
        const {name, value} = e.target;
        setBedBathValues(prevValue => {
            return {
                ...prevValue,
                [name]: value
            }
        });
    }

    function submitBedsBaths() {
        props.passToFilterForm(parseInt(bedBathValues.bedsMin, 10), parseInt(bedBathValues.bathsMin, 10));
    }

    return <fieldset onBlur={submitBedsBaths} id="form-beds-baths" className="form-opt">
                <legend>Beds &amp; Baths</legend>
                <div>
                    <label htmlFor="beds-min">beds:</label>
                    &nbsp;
                    <select id="beds-min" name="bedsMin" onChange={handleChange}>
                        <option value="1" selected={props.isCleared}>1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                        <option value="6">6+</option>
                        <option value="7">7+</option>
                        <option value="8">8+</option>
                        <option value="9">9+</option>
                        <option value="10">10+</option>
                    </select>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <label htmlFor="baths-min">baths:</label>
                    &nbsp;
                    <select id="baths-min" name="bathsMin" onChange={handleChange}>
                        <option value="1" selected={props.isCleared}>1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                        <option value="5">5+</option>
                        <option value="6">6+</option>
                        <option value="7">7+</option>
                        <option value="8">8+</option>
                        <option value="9">9+</option>
                        <option value="10">10+</option>
                    </select>
                </div>
            </fieldset>
}

export default FilterBedBath;