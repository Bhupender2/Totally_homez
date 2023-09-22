import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import TeamDetails from './section-components/team-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import VideoV1 from './section-components/video-v1';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getTeamDetailsApi } from '../actions/teamActions';
import MobileNav from './global-components/Mobile-nav';


const Team_Details = () => {
const {loading,teamDetails}=useSelector((state)=>state.teamDetails)
    const dispatch=useDispatch()
    const {id}=useParams()

    useEffect(()=>{
        dispatch(getTeamDetailsApi(id))

    },[dispatch])
    return <div>
        <MobileNav />
        
 
        <TeamDetails loading={loading} teamDetails={teamDetails} />
        {/* <CallToActionV1 /> */}
        <Footer />
    </div>
}

export default Team_Details

