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


const Home_V7 = () => {
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




    <BestProperty customClass='ltn__feature-area section-bg-1 pt-80 pb-80  mb-120---' />
    <Curousal1/>
    {/* <Aboutv2 /> */}
    {/* <Gallery /> */}
  {/*<CarouselSlider />*/}
    {/* <TeamCarousel/> */}
    <CategoryV3 />
    {/* <HomeCrousal/> */}
    {/* <ApartmentV1 CustomClass="ltn__feature-area section-bg-3 pt-120 pb-90 mb-120---" /> */}
    <BestVilla customClass="ltn__feature-area section-bg-0 pt-120 pb-40 mb-120---" />
    

    {/* <BestPenthouse customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---"  /> */}
    {/* <ProductSliderV1/> */}
    {/* <Banner /> */}
    {/* <Neighbour customClass="ltn__feature-area section-bg-8 pt-120 pb-90 mb-120---"/> */}



    {/* <ProductSlider customClass="ltn__feature-area section-bg-4 pt-120 pb-90 mb-120---"/> */}
    <ProductGrid />
    <ProductGridRent />
    {/* <Availability />*/}
    {/*  <SimpleSlider/>*/}
    <VideoV2 />
    <ApartmentProductGridSale />
    <ApartmentProductGridRent />
    {/* <ProductGrid /> */}
    <BestPenthouse />
    <VideoV1 />

    <PenthouseProductGrid />
    <PenthouseProductGridRent />

    {/* <ProductGrid /> */}

    {/* <Featuresv1 customClass="ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---"/> */}
    {/* <ProSlider /> */}
    {/* <Gallery /> */}
    <BestTownhouse />
    <TownhouseProductGrid />

    <TownhouseProductGridRent />
    {/* <ProductGrid /> */}

    {/* <Category /> */}
    {/* <Testimonial /> */}
    <AboutV5 customClass='ltn__feature-area section-bg-8 pt-40 pb-90 mb-120---' />
    <TeamAgents customClass='ltn__feature-area section-bg-1 pt-80  mb-120---' />
    {/* <Testimonial customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/> */}

    <BlogSlider customClass="section-subtitle-2 " />

    {/* <BlogT customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---'/> */}
    <CallToActionV1 />
    {/* <CarouselSwiper slides={slides} /> */}

    <Footer2 customClass='ltn__feature-area section-bg-1 pt-120 pb-90 mb-120---' />
    <Footer />

  </div>
}

export default Home_V7

