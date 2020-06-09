import React from 'react';
import Navbar from './Navbar'
import FeaturedProducts from './FeaturedProducts'
import CategoryByPicture from './CategorybyPicture';
import SlideShow from './SlideShow';
import Footer from './Footer';

function MainPage() {
    return (
        <div>
            <Navbar />
            <SlideShow />
            <FeaturedProducts />
            <CategoryByPicture />
            <Footer />
        </div>
    )
};

export default MainPage;