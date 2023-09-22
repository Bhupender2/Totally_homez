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
import SellWithUs from './section-components/sellwithus';
import MarketingProperty from './section-components/marketing-property';
import PropertyWorth from './section-components/property-worth';
import PropertyPrepration from './section-components/property-preparation';
import UniqueProperty from './section-components/unique-property';
import BenefitsofListing from './section-components/benefits';
import InnovativeApproach from './section-components/innovativeapproach';
import QualityFocusedCreation from './section-components/qualityfocused';
import HighContent from './section-components/highContent';
import InternetAlone from './section-components/internetalone';
import TakeCareEverything from './section-components/takecareeverything';
import ReadyToSell from './section-components/readytosell';
import MobileNav from './global-components/Mobile-nav';
import { useDispatch, useSelector } from 'react-redux';
import { getListWithUsUsApi } from '../actions/listWithUsActions';
import CultureListWithUs from './section-components/cultureListWithUs';
import PhilosphyListWithus from './section-components/philosphyListWithUs';
import PerksListWithUs from './section-components/perksListWithUs';
import MetaData from './Layout/MetaData';

const ListWithUs = () => {


    const { loading, listWithUs } = useSelector((state) => state.listWithUs)
    const dispatch = useDispatch()
    console.log("listWithUs", listWithUs)
    useEffect(() => (
        dispatch(getListWithUsUsApi())
    ), [dispatch])
    return <div>
        {listWithUs?.length > 0 &&
            <MetaData title={listWithUs[0]?.seo_titel} metaKeyword={listWithUs[0]?.seo_teg} metaDesription={listWithUs[0]?.seo_des} />

        }
        <MobileNav />

        <SellWithUs loading={loading} listWithUs={listWithUs} />
        <MarketingProperty loading={loading} listWithUs={listWithUs} />
        <PropertyWorth loading={loading} listWithUs={listWithUs} />
        {/* <PropertyPrepration/> */}
        <UniqueProperty loading={loading} listWithUs={listWithUs} />

        <BenefitsofListing loading={loading} listWithUs={listWithUs} customClass="ltn__feature-area  pt-120 pb-90 mb-120---" />

        <CultureListWithUs loading={loading} listWithUs={listWithUs} />
        <PhilosphyListWithus loading={loading} listWithUs={listWithUs} />
        <PerksListWithUs loading={loading} listWithUs={listWithUs} />
        <InnovativeApproach />
        <QualityFocusedCreation loading={loading} listWithUs={listWithUs} customClass="ltn__feature-area  pt-120 pb-90 mb-120---" />
        {/* <BlogSlider />*/}
        <HighContent loading={loading} listWithUs={listWithUs} />
        <InternetAlone loading={loading} listWithUs={listWithUs} />
        <TakeCareEverything />
        <ReadyToSell />
        <Footer />
    </div>
}

export default ListWithUs

