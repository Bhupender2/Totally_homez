import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import ShopLeftSidebar from './shop-components/shop-left-sidebar';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import PageHeaderShop from './global-components/PageHeaderShop';

const ShopLeftSidebarPage = () => {
    return <div>
        <Navbar />
        <PageHeaderShop headertitle="Shop Left Sidebar" />
        <ShopLeftSidebar />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ShopLeftSidebarPage

