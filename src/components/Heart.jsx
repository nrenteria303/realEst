import React, { useState } from  'react';

function Heart() {
    const [isSaved, setSavedStatus] = useState(false);

    function handleClick() {
        setSavedStatus(!isSaved);
    }

    return <p onClick={handleClick} className="heart">{isSaved ? "♥" : "♡"}</p>;
}

export default Heart;