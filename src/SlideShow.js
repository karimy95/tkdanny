import React from 'react';
import slideshow1 from './media/slideshow1.png';
import slideshow2 from './media/slideshow2.png';
import slideshow3 from './media/slideshow3.png';

function SlideShow(){
    return (
        <div>
        <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
          <img src={slideshow1} width="100%" height="100%" class="img-fluid" alt="Responsive " />
          <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="index.html" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img src={slideshow2} width="100%" height="100%" class="img-fluid" alt="Responsive " />
            <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="index.html" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
          <img src={slideshow3} class="img-fluid" alt="Responsive " />
          <div class="container">
              <div class="carousel-caption">
                <h1>Another example headline.</h1>
                <p>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p><a class="btn btn-lg btn-primary" href="index.html" role="button">Learn more</a></p>
              </div>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="index.html" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="index.html" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      </div>
    )
};

export default SlideShow;