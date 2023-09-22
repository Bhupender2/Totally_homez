import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogDetails from './blog-components/blog-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import { useDispatch,useSelector } from 'react-redux';
import { getCarouselDetailsApi } from '../actions/crouselActions';
import {useParams} from 'react-router-dom'
import CarouselDetailsCard from './blog-components/CarouselDetails';
import MobileNav from './global-components/Mobile-nav';

const CarouselDetails = ({caro}) => {
    const dispatch=useDispatch()
    const {id}=useParams()
const {carouselDetails}=useSelector((state)=>state.carouselDetails)

    useEffect(()=>{
        dispatch(getCarouselDetailsApi(id))

    },[dispatch])

    return <div>
        <MobileNav />
        {/* <PageHeader headertitle="News Details" /> */}
        <CarouselDetailsCard carouselDetails={carouselDetails}/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default CarouselDetails

