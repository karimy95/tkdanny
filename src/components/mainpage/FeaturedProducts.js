import React from 'react';
import featured1 from './media/featured1.png';
import featured2 from './media/featured2.png';
import featured3 from './media/featured3.png';





function FeaturedProducts() {
    return (

        <div class="container marketing mt-5">

      
        <div class="row">
          <div class="col-lg-4">
          <img src={featured1} width='140' class="img-fluid" alt="featured product 1" />
            <h2>Featured 1</h2>
            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-lg-4">
          <img src={featured2} width='140' class="img-fluid" alt="featured product 2" />
            <h2>Featured 2</h2>
            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
          <div class="col-lg-4">
          <img src={featured3} width='140' class="img-fluid" alt="featured product 3" />
            <h2>Featured 3</h2>
            <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
          </div>
        </div>
        </div>

    )
};

export default FeaturedProducts;