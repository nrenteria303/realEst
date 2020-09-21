import React, {useState} from 'react';
import FilterForm from "./FilterForm";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function Filters(props) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpandClick() {
        setIsExpanded(!isExpanded);
    }

    function submitCriteria(formObj) {
        setIsExpanded(false);
        props.passToHeader(formObj);
    }

    return  <div className="filter-cont">
                <div onClick={handleExpandClick} id="filter-expand-btn" className={isExpanded ? "btn-expanded" : ""}>
                    <h3>Filters {isExpanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}</h3>
                </div>
                <div id="filters-options-cont" className={isExpanded ? "filters-options-cont-showing" : "filters-options-cont-hidden"}>
                    <FilterForm passToFilters={submitCriteria} />
                </div>
            </div>
}

export default Filters;