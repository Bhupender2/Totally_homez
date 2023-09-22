import React from 'react'
import MobileNav from '../global-components/Mobile-nav'
import Footer_v1 from '../global-components/footer'
import CallToActionV1 from '../section-components/call-to-action-v1';
import Cummunity from './Cummunity';
import CommunityGrid from './CommunityGrid';
import CarouselSlider from './Carousel';
import CommunityCarousel from './communityCarousel';
import CommunityGrid2 from './CommunityGrid2';
import ProductGrid from './ProductGrid';


const GuideLine = () => {
  return (
    <div>
        <MobileNav />
        <CommunityGrid/>
      

        <Cummunity/>
        
        <CommunityCarousel/>
        <ProductGrid />
        <CallToActionV1 />
        <Footer_v1 />
    </div>
  )
}

export default GuideLine
