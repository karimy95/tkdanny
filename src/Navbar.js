import React from 'react';


function Navbar() {
    return (
        <div>
        <a href='index.html'><img class='company-logo' src ='logo.png'/></a>
        <nav>
         <ul>
                <li class='nav-bar-list'><a class='nav-bar-a' href="#home">GET STARTED</a></li>
                <li class='nav-bar-list'><a class='nav-bar-a' href="#news">PRODUCTS</a></li>
                <li class='nav-bar-list'><a class='nav-bar-a' href="#contact">ABOUT</a></li>
                <li class='nav-bar-list'><a class='nav-bar-aux-icon' href="#contact">SIGN IN</a></li>
                <li class='nav-bar-list'><a class='nav-bar-aux-icon' href="#contact">HELP</a></li>
            </ul>
            </nav>
        </div>
    )
};


export default Navbar;

