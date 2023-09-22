import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import Register from './section-components/register';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';

const RegisterV1 = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Account" subheader="Register" />
        <Register />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default RegisterV1

