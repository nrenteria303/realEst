import React from "react";
import Filters from './filter/Filters';

function Header() {
    return <header>
        <div id="header_inner">
            <h1><span className="heading-thin">real</span><span className="heading-bold">Est</span></h1>
            <Filters />
        </div>
    </header>
}

export default Header;