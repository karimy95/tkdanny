import React from 'react';


function Navbar() {
    return (

        <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
            <div class="collapse navbar-collapse" id="navbarsExample03">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="index.html" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown03">
                            <a class="dropdown-item" href="index.html">Seeds and Grains</a>
                            <a class="dropdown-item" href="index.html">Pulses</a>
                            <a class="dropdown-item" href="index.html">Fruits and Vegetables</a>
                        </div>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="index.html" id="dropdown03" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                        <div class="dropdown-menu" aria-labelledby="dropdown03">
                            <a class="dropdown-item" href="index.html">About</a>
                            <a class="dropdown-item" href="index.html">Contact Us</a>
                            <a class="dropdown-item" href="index.html">Something else here</a>
                        </div>
                    </li>
                </ul>
                <form class="form-inline my-2 my-md-0">
                    <input class="form-control" type="text" placeholder="Search" />
                </form>
            </div>
        </nav>

    )
};

export default Navbar;

