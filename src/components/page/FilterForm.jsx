import React from 'react';

function FilterForm() {
    return <form>
        <fieldset id="form-price" className="form-opt">
            <legend>Price</legend>
            <div className="max-min">
                <input id="price-min" name="price-min" type="number" min="0" max="5000000" step="10000" placeholder="min" />
                &nbsp;-&nbsp;
                <input id="price-max" name="price-max" type="number" min="0" max="5000000" step="10000" placeholder="max" />
            </div>
        </fieldset>
        <fieldset id="form-beds-baths" className="form-opt">
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
    </form>
}

export default FilterForm;