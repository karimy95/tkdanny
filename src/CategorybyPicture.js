import React from 'react';
import vegetablesImage from './media/vegetables.png';
import grainsImage from './media/grains.png';
import pulsesImage from './media/pulses.png';
import fruitsImage from './media/fruits.png';
import backgroundImage from './media/background.png';






function CategoryByPicture() {
    return (
        <div>
            <div class="row mx-5 mb-5">
                <div class="col mx-5">
                    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column background-grey">
                            <h2 class="text-center container-text-left">SEEDS AND BEANS</h2>
                            <h4 class="card-text mb-auto font-weight-bold">
                            
                            </h4>
                            <button class='btn-w-10'>Learn More</button>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src={pulsesImage} width='800' class="img-fluid" alt="Responsive image" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="row mx-5 mb-5">
                <div class="col mx-5">
                    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col-auto d-none d-lg-block">
                            <img src={grainsImage} width='800' class="img-fluid" alt="Responsive image" />
                        </div>
                        <div class="col p-4 d-flex flex-column background-grey">
                            <h2 class="text-center container-text-left">GRAINS</h2>
                            <h4 class="card-text mb-auto font-weight-bold">
                              
                            </h4>
                            <button class='btn-w-10'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row mx-5 mb-5">
                <div class="col mx-5">
                    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col p-4 d-flex flex-column background-grey">
                            <h2 class="text-center container-text-left">VEGETABLES</h2>
                            <h4 class="card-text mb-auto font-weight-bold">
                        
                            </h4>
                            <button class='btn-w-10'>Learn More</button>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img src={vegetablesImage} width='800' class="img-fluid" alt="Responsive image" />
                        </div>
                    </div>
                </div>
            </div>


            <div class="row mx-5 mb-5">
                <div class="col mx-5">
                    <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                        <div class="col-auto d-none d-lg-block">
                            <img src={fruitsImage} width='800' class="img-fluid" alt="Responsive image" />
                        </div>
                        <div class="col p-4 d-flex flex-column background-grey">
                            <h2 class="text-center container-text-left">FRUITS</h2>
                            <h4 class="card-text mb-auto font-weight-bold">
                              
                            </h4>
                            <button class='btn-w-10'>Learn More</button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
};

export default CategoryByPicture;