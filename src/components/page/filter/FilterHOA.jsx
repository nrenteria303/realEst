import React, {useState} from 'react';

function FilterHOA() {
    return <fieldset id="form-hoa" className="form-opt">
                <legend>Homeowner's Assn.</legend>
                <div>
                    <label htmlFor="hoa">HOA?</label>
                    &nbsp;
                    <select id="hoa" name="hoa">
                        <option value="">-- select --</option>
                        <option value="true">Sure, that's fine</option>
                        <option value="false">No way!</option>
                    </select>
                </div>
            </fieldset>
}

export default FilterHOA;