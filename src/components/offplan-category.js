import React from 'react';
import Navbar from './global-components/navbar';
import PageHeader from './global-components/page-header';
import BlogGrid from './blog-components/blog-grid';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import MobileNav from './global-components/Mobile-nav';
import CommunityyGrid from './blog-components/categorygrid';
import CategoryGrid from './blog-components/categorygrid';
import CategoryGrid12 from './blog-components/categorygrid';
import CategoryBreadCrumss from './global-components/cattegory';
import OffPlanCategoryBreadcrums from './global-components/pffplanbreadcrums';

const OffPlanCategory = () => {
    return <div>
        <MobileNav />
        <OffPlanCategoryBreadcrums headertitle="Garden Homes Frond C" customclass="mb-0 pt-100 " />
        <CategoryGrid12/>
        <CallToActionV1 />
        <Footer />
    </div>
}

export default OffPlanCategory

