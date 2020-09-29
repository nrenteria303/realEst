import React, {useState} from 'react';

function FilterHOA(props) {
    const [hoa, setHOA] = useState('');

    function handleChange(e) {
        setHOA(e.target.value);
    }

    function submitHOA() {
        props.passToFilterForm(hoa);
    }

    return <fieldset onBlur={submitHOA} id="form-hoa" className="form-opt">
                <legend>Homeowner's Assn.</legend>
                <div>
                    <label htmlFor="hoa">HOA?</label>
                    &nbsp;
                    <select id="hoa" name="hoa" onChange={handleChange}>
                        <option value="" selected={props.isCleared}>-- select --</option>
                        <option value="true">Yes please!</option>
                        <option value="false">No way!</option>
                    </select>
                </div>
            </fieldset>
}

export default FilterHOA;