import React from 'react';

function FilterBedBath() {
    return <fieldset id="form-beds-baths" className="form-opt">
                <legend>Beds &amp; Baths</legend>
                <div>
                    <label for="beds-min">beds:</label>
                    &nbsp;
                    <select id="beds-min" name="beds-min">
                        <option value="1">1+</option>
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
                    <label for="baths-min">baths:</label>
                    &nbsp;
                    <select id="baths-min" name="baths-min">
                        <option value="1">1+</option>
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