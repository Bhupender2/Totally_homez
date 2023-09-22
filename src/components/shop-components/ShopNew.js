import React from 'react'
import MobileNav from '../global-components/Mobile-nav'
import GridPage from './GridPage'
import CallToActionV1 from '../section-components/call-to-action-v1';
import Footer from '../global-components/footer';
import Footer_v1 from '../global-components/footer';
import ShopContent from '../section-components/ShopContent';
import SearchBarV1 from '../section-components/search-banner';

const ShopNew = () => {
  return (
    <div>
      <MobileNav/>
      <SearchBarV1/>
      <ShopContent/>
      <GridPage/>
      <CallToActionV1 />
        <Footer_v1 />
    </div>
  )
}

export default ShopNew
