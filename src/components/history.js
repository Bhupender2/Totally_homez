import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import HistoryV1 from './section-components/history';
import WhyChooseUs from './section-components/why-choose-us';
import CallToActonV4 from './section-components/call-to-action-v4';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const History = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Our History" subheader="History"/>
        <HistoryV1 />
        <WhyChooseUs />
        <CallToActonV4 />
        <BlogSlider customClass="pt-120"/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default History

