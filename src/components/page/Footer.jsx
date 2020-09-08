import React from 'react';

function Footer() {
    let year = new Date().getFullYear();

    return <footer>
        <p>Copyright &copy; {year} Nick Renteria Web Development</p>
    </footer>
}

export default Footer;