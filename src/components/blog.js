import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogRightSidebar from './blog-components/blog-right-sidebar';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const BlogRightSidebarPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog" subheader="Blog" />
        <BlogRightSidebar />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogRightSidebarPage

