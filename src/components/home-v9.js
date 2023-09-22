import React from 'react';
import TopBar from './global-components/topbar';
import Navbar from './global-components/navbar-v2';
import BannerV7 from './section-components/banner-v8';
import Aboutv3 from './section-components/about-v3';
import Video from './section-components/video-v2';
import Featuresv1 from './section-components/features-v1';
import UpComingProduct from './section-components/upcoming-product-v1';
import ApartmentV2 from './section-components/apartment-v2';
import ProductSlider from './section-components/product-slider-v2';
import Availability from './section-components/availability';
import Neighbour from './section-components/neighbour';
import Cateogory from './section-components/category-v2';
import Testimonial from './section-components/testimonial-v2';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Home_V8 = () => {
    return <div>
        <TopBar/> 
        <Navbar/> 
        <BannerV7 />
        <Aboutv3 />
        <Video />
        <Featuresv1 customClass="ltn__feature-area section-bg-1--- pt-115 pb-90 mb-120---" />
        <UpComingProduct />
        <ApartmentV2 />
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

export default Home_V8

