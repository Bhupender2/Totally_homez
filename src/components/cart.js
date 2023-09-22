import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Cart from './shop-components/cart';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const Cart_V1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Cart" />
        <Cart />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default Cart_V1

