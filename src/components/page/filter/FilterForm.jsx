import React, {useState} from 'react';
import FilterPrice from './FilterPrice';
import FilterBedBath from './FilterBedBath';
import FilterHOA from './FilterHOA';
import FilterSqft from './FilterSqft';

function FilterForm(props) {
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
        props.passToFilters(formValues);
    }

    function submitPriceCriteria(priceMin, priceMax) {
        setFormValues(prevValues => {
            return {
                ...prevValues,
                priceMin: priceMin,
                priceMax: priceMax
            }

        });
    }

    function submitSqftCriteria(sqftMin, sqftMax) {
        setFormValues(prevValues => {
            return {
                ...prevValues,
                sqftMin: sqftMin,
                sqftMax: sqftMax
            }

        });
    }

    function submitBedsBathsCriteria(bedsMin, bathsMin) {
        setFormValues(prevValues => {
            return {
                ...prevValues,
                bedsMin: bedsMin,
                bathsMin: bathsMin
            }

        });
    }

    function submitHOACriteria(hoa) {
        setFormValues(prevValues => {
            return {
                ...prevValues,
                HOA: hoa
            }

        });
    }

    return <form onSubmit={handleSubmit}>
                <FilterPrice passToFilterForm={submitPriceCriteria} />
                <FilterBedBath passToFilterForm={submitBedsBathsCriteria} />
                <FilterHOA passToFilterForm={submitHOACriteria} />
                <FilterSqft passToFilterForm={submitSqftCriteria} />
                <div id="form-btns">
                    {/* <button id="btn-clear">Clear</button> */}
                    <button id="btn-apply">Apply</button>
                </div>
            </form>
}

export default FilterForm;