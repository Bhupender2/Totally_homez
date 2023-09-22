import React, { useEffect } from 'react';
import Navbar from './global-components/navbar-v3';
import BannerV5 from './section-components/banner-v5';
import BlogSlider from './blog-components/blog-slider-v1';
import VideoV1 from './section-components/video-v1';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BestProperty from './section-components/BestProperty';
import AboutV5 from './section-components/about-v5';
import Footer2 from './global-components/Footer2';
import TeamAgents from './section-components/TeamAgents';
import ProductGrid from './shop-components/ProductGrid';
import BestVilla from './section-components/BestVilla';
import CategoryV3 from './section-components/category-v3';
import VideoV2 from './section-components/video-v2';
import BestTownhouse from './section-components/BestTownhouse';
import BestPenthouse from './section-components/BestPenthouse';
import { useDispatch } from 'react-redux';
import { getAllPropertiesApi } from '../actions/propertiesActions';
import TownhouseProductGrid from './shop-components/TownhouseProductGrid';
import PenthouseProductGrid from './shop-components/PenthouseProductGrid';
import ApartmentProductGridSale from './shop-components/ApartmentProductGrid';
import ApartmentProductGridRent from './shop-components/ApartmentProductGridRent';
import TownhouseProductGridRent from './shop-components/TownhouseProductGridRent';
import PenthouseProductGridRent from './shop-components/PenthouseProductGridRent';
import ProductGridRent from './shop-components/ProductGridRent';
import CarouselSlider from './shop-components/Carousel';
import MetaData from './Layout/MetaData';
import Curousal1 from './shop-components/curosal-1';


const CurousalTypes = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getAllPropertiesApi())

  }, [dispatch])
  const slides = [
    {
      id: 1,
      title: 'Slide 1',
      imageUrl: 'https://placeimg.com/640/480/tech',
    },
    {
      id: 2,
      title: 'Slide 2',
      imageUrl: 'https://placeimg.com/640/480/nature',
    },
    {
      id: 3,
      title: 'Slide 3',
      imageUrl: 'https://placeimg.com/640/480/animals',
    },
  ];
  return <div>
    <MetaData metaKeyword="meta keyword test" title="Totally Homez" />

    <Navbar CustomClass="ltn__header-transparent gradient-color-2" />
    <BannerV5 />
<Curousal1/>

    <CarouselSlider />
 <ProductGrid />
    <ProductGridRent />

    <ApartmentProductGridSale />
    <ApartmentProductGridRent />
   
 

    <PenthouseProductGrid />
    <PenthouseProductGridRent />


    <BestTownhouse />
    <TownhouseProductGrid />

    <TownhouseProductGridRent />


   

   

    <Footer2 customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---' />
    <Footer />

  </div>
}

export default CurousalTypes

