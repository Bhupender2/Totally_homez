import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PortfolioV1 from './section-components/portfolio-v1';
import CallToActonV2 from './section-components/call-to-action-v2';
import BlogSlider from './blog-components/blog-slider-v1';
import Sponsor from './section-components/sponsor-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Portfolio_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our Portfolio" subheader="Portfolio" />
        <PortfolioV1 />
        <CallToActonV2 />
        <BlogSlider sectionClass="pt-120" />
        <Sponsor />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Portfolio_V1

