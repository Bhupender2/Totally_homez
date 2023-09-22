import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogLeft from './blog-components/blog-list';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const BlogLeftSidebar = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Blog Left Sidebar" subheader="Blog" />
        <BlogLeft />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default BlogLeftSidebar

