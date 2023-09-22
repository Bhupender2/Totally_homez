import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TrackOrder from './shop-components/order-tracking';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const OrderTracking = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Order Tracking" />
        <TrackOrder />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default OrderTracking

