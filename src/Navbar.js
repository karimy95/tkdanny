import React from 'react';


function Navbar() {
    return (
        <div>
         <ul>
                <li class='nav-bar-list'><a class='nav-bar-a' href="#home">GET STARTED</a></li>
                <li class='nav-bar-list'><a class='nav-bar-a' href="#news">PRODUCTS</a></li>
                <li class='nav-bar-list'><a class='nav-bar-a' href="#contact">ABOUT</a></li>
                <li class='nav-bar-list aux-nav-bar-item'><a class='nav-bar-a' href="#contact">SIGN IN</a></li>
                <li class='nav-bar-list aux-nav-bar-item'><a class='nav-bar-a' href="#contact">HELP</a></li>
            </ul>
        </div>
    )
};


export default Navbar;

