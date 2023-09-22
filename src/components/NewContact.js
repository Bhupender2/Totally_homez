import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ContactDetails from './blog-components/ContactDetails';
import ContactInfo from './section-components/contact-info';
import PhotoContact from './section-components/photocontact';
import MobileNav from './global-components/Mobile-nav';
import { getContactUsApi } from '../actions/contactActions';
import { useDispatch, useSelector } from 'react-redux';
import ShopGrid_V1 from './shop-grid';
import NewLocation from './new-location';
import NewBreadCrums from './global-components/newbreadcrum';
import GoogleMap from './section-components/GoogleMap';
import MetaData from './Layout/MetaData';

const NewContact = () => {

    const {contact,loading}=useSelector((state)=>state.contact)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getContactUsApi())
    },[dispatch])
    return <div>
        <MobileNav/>
        {contact?.length>0 &&
                <MetaData title={contact[0]?.seo_titel} metaKeyword={contact[0]?.seo_teg} metaDesription={contact[0]?.seo_des} />
            
        }
        {/* <BlogDetails /> */}
        <NewBreadCrums headertitle="Garden Homes Frond C" customclass="mb-0 pt-100 "/>
                

                <GoogleMap/>

        <ContactInfo contactData={contact}/>
       {/* 
        <ContactDetails/>*/}

        {/* <PageHeader headertitle="Contact us" /> */}
        {/* <BlogDetails /> */}
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default NewContact

