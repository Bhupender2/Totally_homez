import React, { useEffect } from 'react';
import Navbar from '../global-components/navbar';

import CallToActionV1 from '../section-components/call-to-action-v1';
import Footer from '../global-components/footer';
import { useDispatch, useSelector } from 'react-redux';
import { getPropertiesByTypeApi } from '../../actions/propertiesActions';
import { useLocation } from 'react-router-dom';
import TypeProperties from './TypeProperties';


const PropertyType = () => {
    const {loading,propertiesByType}=useSelector((state)=>state.propertiesByType)
    const dispatch = useDispatch()
    
    const location = useLocation();

    const url = location.pathname;

    const segments = url.split('/');
    const lastSegment = segments[segments.length - 1];

    useEffect(() => {
        dispatch(getPropertiesByTypeApi(lastSegment))

    }, [dispatch])
 
    return <div>
        <Navbar />
        {/* <BlogDetails /> */}
        <TypeProperties loading={loading} properties={propertiesByType} />
        {/* <PageHeader headertitle="Contact us" /> */}
        {/* <BlogDetails /> */}
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default PropertyType

