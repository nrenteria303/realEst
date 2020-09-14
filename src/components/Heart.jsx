import React, { useState } from  'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

function Heart() {
    const [isSaved, setSavedStatus] = useState(false);

    function handleClick() {
        setSavedStatus(!isSaved);
    }

    return <p onClick={handleClick} className="heart">{isSaved ? <FavoriteIcon /> : <FavoriteBorderIcon />}</p>;
}

export default Heart;