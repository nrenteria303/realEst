import React, {useState} from 'react';
import FilterForm from "./FilterForm";

import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

function Filters() {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleExpandClick() {
        setIsExpanded(!isExpanded);
    }

    return  <div className="filter-cont">
                <div onClick={handleExpandClick} id="filter-expand-btn" className={isExpanded ? "btn-expanded" : ""}>
                    <h3>Filters {isExpanded ? <RemoveCircleOutlineIcon /> : <AddCircleOutlineIcon />}</h3>
                </div>
                <div id="filters-options-cont" className={isExpanded ? "filters-options-cont-showing" : "filters-options-cont-hidden"}>
                    <FilterForm />
                </div>
            </div>
}

export default Filters;