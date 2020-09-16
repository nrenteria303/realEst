import React from 'react';
import FilterPrice from './FilterPrice';
import FilterBedBath from './FilterBedBath';
import FilterHOA from './FilterHOA';
import FilterSqft from './FilterSqft';

function FilterForm() {
    function handleSubmit(e) {
        e.preventDefault();
    }

    return <form onSubmit={handleSubmit}>
        <FilterPrice />
        <FilterBedBath />
        <FilterHOA />
        <FilterSqft />
        <div id="form-btns">
            <button id="btn-clear">Clear</button>
            <button id="btn-apply">Apply</button>
        </div>
    </form>
}

export default FilterForm;