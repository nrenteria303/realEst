import React, {useState} from 'react';
import FilterPrice from './FilterPrice';
import FilterBedBath from './FilterBedBath';
import FilterHOA from './FilterHOA';
import FilterSqft from './FilterSqft';

function FilterForm() {
    const [formValues, setFormValues] = useState({
        priceMin: 0,
        priceMax: 1000000000,
        HOA: '',
        bedsMin: 1,
        bathsMin: 1,
        sqftMin: 0,
        sqftMax: 20000
    });

    function handleSubmit(e) {
        e.preventDefault();
    }

    function applyPrice(priceMin, priceMax) {
        setFormValues(prevValues => {
            return {
                ...prevValues,
                priceMin: priceMin,
                priceMax: priceMax
            }

        });
    }

    return <form onSubmit={handleSubmit}>
                <FilterPrice onApplyPrice={applyPrice} />
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