import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import Dnavbar from './global-components/Dnavbar';
import PageHead from './global-components/PageHead';
import ShopDetails from './shop-components/ShopDetails';
import VideoV1 from './section-components/video-v1';
import FactsandFigures from './shop-components/FactsandFigures';

const PropertyDetails = () => {
    return <div>
        {/* <Navbar /> */}
        <Dnavbar />
        {/* <PageHeader headertitle="Product Details" customclass="mb-0" /> */}
        <ProductSlider />

        <PageHead  headertitle="Garden Homes Frond C" customclass="mb-0"/>
        <FactsandFigures/>

        {/* <ProductDetails /> */}
        <ShopDetails/>

        <VideoV1 /> 
        <CallToActionV1 />
        <Footer />
    </div>
}

export default PropertyDetails

