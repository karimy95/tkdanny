import React from 'react';
import SlideShow from '../mainpage/SlideShow';
import FeaturedProducts from '../mainpage/FeaturedProducts';
import CategoryByPicture from '../mainpage/CategorybyPicture';


function AdminPage() {
    return (
        <div>
        <SlideShowAdmin/>
        <FeaturedProductsAdmin/>
        <CategoryByPictureAdmin/>
        </div>
    )
};

export default AdminPage;

/*
we are going to add the following :
1- Ability to control text on slide show
*/