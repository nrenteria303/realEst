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
    const [formIsCleared, setFormIsCleared] = useState(true)

    function handleSubmit(e) {
        e.preventDefault(); 
        props.passToFilters(formValues);
    }

    function submitPriceCriteria(priceMin, priceMax) {
        setFormIsCleared(false);
        setFormValues(prevValues => {
            return {
                ...prevValues,
                priceMin: priceMin,
                priceMax: priceMax
            }

        });
    }

    function submitSqftCriteria(sqftMin, sqftMax) {
        setFormIsCleared(false);
        setFormValues(prevValues => {
            return {
                ...prevValues,
                sqftMin: sqftMin,
                sqftMax: sqftMax
            }

        });
    }

    function submitBedsBathsCriteria(bedsMin, bathsMin) {
        setFormIsCleared(false);
        setFormValues(prevValues => {
            return {
                ...prevValues,
                bedsMin: bedsMin,
                bathsMin: bathsMin
            }

        });
    }

    function submitHOACriteria(hoa) {
        setFormIsCleared(false);
        setFormValues(prevValues => {
            return {
                ...prevValues,
                HOA: hoa
            }

        });
    }

    function clearForm() {
        setFormIsCleared(true);
        setFormValues({
            priceMin: 0,
            priceMax: 1000000000,
            HOA: '',
            bedsMin: 1,
            bathsMin: 1,
            sqftMin: 0,
            sqftMax: 20000
        });
    }

    return <form onSubmit={handleSubmit}>
                <FilterPrice isCleared={formIsCleared} passToFilterForm={submitPriceCriteria}/>
                <FilterBedBath isCleared={formIsCleared} passToFilterForm={submitBedsBathsCriteria} />
                <FilterHOA isCleared={formIsCleared} passToFilterForm={submitHOACriteria} />
                <FilterSqft isCleared={formIsCleared} passToFilterForm={submitSqftCriteria} />
                <div id="form-btns">
                    <div onClick={clearForm} id="btn-clear">Clear</div>
                    <button id="btn-apply">Apply</button>
                </div>
            </form>
}

export default FilterForm;