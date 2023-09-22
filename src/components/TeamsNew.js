import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import PortfolioV1 from './section-components/portfolio-v1';
import CallToActonV2 from './section-components/call-to-action-v2';
import BlogSlider from './blog-components/blog-slider-v1';
import Sponsor from './section-components/sponsor-v2';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import NewV1Team from './section-components/NewV1Team';


const TeamsNew = () => {
  return (
    <div>
        <Navbar />

        {/* <PageHeader headertitle="Our Portfolio" subheader="Portfolio" /> */}
        <NewV1Team />
        {/* <CallToActonV2 /> */}
        {/* <BlogSlider sectionClass="pt-120" /> */}
        {/* <Sponsor /> */}
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
  )
}

export default TeamsNew