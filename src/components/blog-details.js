import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BlogSlider from './blog-components/blog-slider-v1';
import MobileNav from './global-components/Mobile-nav';

const BlogDetailsPage = () => {
    return <div>
        <MobileNav />
        {/* <PageHeader headertitle="News Details" /> */}
        <BlogDetails />
        <BlogSlider sectionClass="pt-120" />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogDetailsPage

