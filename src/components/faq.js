import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Faq from './section-components/faq-v1';
import Counter from './section-components/counter-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const FaqV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Frequently asked questions" subheader="FAQ" />
        <Faq />
        <Counter />
        <BlogSlider sectionClass="pt-120" />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default FaqV1

