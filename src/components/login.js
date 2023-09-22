import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Login from './section-components/login';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const LoginV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Account" subheader="Login" />
        <Login />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default LoginV1

