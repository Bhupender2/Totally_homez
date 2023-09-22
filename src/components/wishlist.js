import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Wishlist from './section-components/wishlist';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const WishlistPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Wishlist" />
        <Wishlist />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default WishlistPage

