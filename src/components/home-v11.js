import React from 'react';
import Navbar from './global-components/navbar-v5';
import Banner from './section-components/banner-v2';
import Category from './section-components/category-v3';
import ApartmentV2 from './section-components/apartment-v2';
import ProductSlider from './section-components/product-slider-v2';
import Availability from './section-components/availability';
import Neighbour from './section-components/neighbour';
import Cateogory from './section-components/category-v2';
import Testimonial from './section-components/testimonial-v2';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Home_V11 = () => {
    return <div>
        <Navbar/> 
        <Banner />
        <Category />
        <ApartmentV2 customClass="pt-90"/>
        <ProductSlider />
        <Availability />
        <Neighbour />
        <Cateogory />
        <Testimonial />
        <BlogSlider customClass="section-subtitle-2"/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Home_V11

