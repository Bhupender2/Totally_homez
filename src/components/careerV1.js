import React, { useEffect } from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import AboutV4 from './section-components/about-v4';
import Features from './section-components/features-v1';
import Team from './section-components/team-v1';
import Testimonial from './section-components/testimonial-v1';
import BlogSlider from './blog-components/blog-slider-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import WorkWithUs from './section-components/workwithus';
import JoinUs from './section-components/join-us';
import RightFit from './section-components/right-fit';
import OurCulture from './section-components/our-culture';
import OurPhilosophy from './section-components/our-philosophy';
import ThePerks from './section-components/the-perks';
import RecruitmentProcess from './section-components/recuirtment';
import EmployeeEvent from './section-components/employe-event';
import MobileNav from './global-components/Mobile-nav';
import { useDispatch, useSelector } from 'react-redux';
import { getCarrerApi } from '../actions/careerActions';
import MetaData from './Layout/MetaData';

const CareerV1 = () => {
    const { loading, career } = useSelector((state) => state.career)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCarrerApi())
    }, [dispatch])
    return <div>
        {career?.length > 0 &&
            <MetaData title={career[0]?.seo_titel} metaKeyword={career[0]?.seo_teg} metaDesription={career[0]?.seo_des} />

        }
        <MobileNav />
        <WorkWithUs loading={loading} careerData={career} />
        <JoinUs loading={loading} careerData={career} />
        <RightFit loading={loading} careerData={career} customClass="ltn__feature-area  pt-120 pb-90 mb-120---" />

        <OurCulture loading={loading} careerData={career} />
        <OurPhilosophy loading={loading} careerData={career} />
        <ThePerks loading={loading} careerData={career} />
        <Testimonial />
        {/* <BlogSlider />*/}
        <RecruitmentProcess loading={loading} careerData={career} />
        <EmployeeEvent loading={loading} careerData={career} />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default CareerV1

