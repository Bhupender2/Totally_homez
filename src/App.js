import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import HomeV2 from './components/home-v2';
import HomeV3 from './components/home-v3';
import HomeV4 from './components/home-v4';
import HomeV5 from './components/home-v5';
import HomeV6 from './components/home-v6';
import HomeV7 from './components/home-v7';
import HomeV8 from './components/home-v8';
import HomeV9 from './components/home-v9';
import HomeV10 from './components/home-v11';
import log from 'loglevel';

import About from './components/about';
import Service from './components/service';
import ServiceDetails from './components/service-details';
import Portfolio from './components/portfolio';
import PortfolioV2 from './components/portfolio-v2';
import PortfolioDetails from './components/portfolio-details';
import Team from './components/team';
import TeamDetails from './components/team-details';
import Faq from './components/faq';
import ComingSoon from './components/coming-soon';
import Error  from './components/404';
import Location  from './components/location';

import Shop from './components/shop';
import ShopGrid from './components/shop-grid';
import ProdductDetails from './components/product-details';
import ShopLeftSidebar from './components/shop-left-sidebar';
import ShopRightSidebar from './components/shop-right-sidebar';

import BlogGrid from './components/blog-grid';
import BlogLeftSidebar from './components/blog-left-sidebar';
import BlogRightSidebar from './components/blog-right-sidebar';
import Blog from './components/blog';

import BlogDetails from './components/blog-details';
import Contact from './components/contact';
import Cart from './components/cart';
import Checkout from './components/checkout';
import MyAccount from './components/my-account';
import Login from './components/login';
import Register from './components/register';
import AddListing from './components/add-listing';
import Wishlist from './components/wishlist';
import OrderTracking from './components/order-tracking';
import History from './components/history';
import ShopGridV1 from './components/shop-components/shop-right-sidebar';
import OffPlan from './components/section-components/OffPlan';

import Listings from './components/Listings';
import PropertyDetails from './components/PropertyDetails';
import NewContact from './components/NewContact';
import TeamsNew from './components/TeamsNew';
import PropertyType from './components/shop-components/PropertyType';
import CarouselDetails from './components/CarouselDetails';
import aboutUs from './components/about-uss';
import CareerV1 from './components/careerV1';
import ListWithUs from './components/listwithus';
import GridPage from './components/shop-components/GridPage';
import ShopNew from './components/shop-components/ShopNew';
import Cummunity from './components/shop-components/Cummunity';
import GuideLine from './components/shop-components/GuideLine';
import BreadCrumbs from './components/breadcrums';
import CommunityGrid from './components/categoryyyy-grid';
import CategoryGrid from './components/categoryyyy-grid';
import CategoryGrid11 from './components/categoryyyy-grid';
import OffPlanCategory from './components/offplan-category';
import CurousalTypes from './components/curousalTypes';



 
 const App = () => {
  log.setLevel(log.levels.DEBUG);

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
   return (
    <BrowserRouter>
    <div>
    <Switch>
        <Route exact path="/" component={HomeV7} />
        <Route path="/home-v2" component={HomeV2} />
        <Route path="/home-v3" component={HomeV3} />
        <Route path="/home-v4" component={HomeV4} />
        <Route path="/home-v5" component={HomeV5} />
        <Route path="/home-v6" component={HomeV6} />
        <Route path="/home-v7" component={HomeV7} />
        <Route path="/home-v8" component={HomeV8} />
        <Route path="/home-v9" component={HomeV9} />
        <Route path="/home-v10" component={HomeV10} />

        <Route path="/career" component={CareerV1} />
        <Route path="/list-with-us" component={ListWithUs} />
        <Route path="/service" component={Service} />
        <Route path="/service-details" component={ ServiceDetails } />
        <Route path="/portfolio" component={ Portfolio } />
        <Route path="/portfolio-v2" component={ PortfolioV2 } />
        <Route path="/portfolio-details" component={ PortfolioDetails } />
        <Route path="/team" component={ Team } />
        <Route path="/team-details/:id" component={ TeamDetails } />
        <Route path="/faq" component={ Faq } />
        <Route path="/coming-soon" component={ ComingSoon } />
        <Route path="/404" component={ Error } />
        <Route path="/location" component={ Location } />
        {/* <Route path="/" component={ Shop } /> */}
        {/* <Route path="/shop-grid" component={ ShopGrid } /> */}
        {/* <Route path="/shop" component={ ShopLeftSidebar } /> */}
        <Route path="/shop" component={ ShopLeftSidebar } />
        {/* <Route path="/shopjhfe" component={ ShopRightSidebar } /> */}

        <Route path="/product-details" component={ ProdductDetails } />
        {/* blog */}
        <Route path="/blogs" component={ BlogGrid } />
        <Route path="/category-v11" component={ CategoryGrid11 } />
        <Route path="/offplan-category" component={ OffPlanCategory } />
        <Route path="/blog-left-sidebar" component={ BlogLeftSidebar } />
        {/* <Route path="/blog-right-sidebar" component={ BlogRightSidebar } /> */}
        <Route path="/blog" component={ Blog } />


        <Route path="/blog-details" component={ BlogDetails } />
        {/* <Route path="/contact" component={ Contact } /> */}
        <Route path="/cart" component={ Cart } />
        <Route path="/checkout" component={ Checkout } />
        <Route path="/my-account" component={ MyAccount } />
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/add-listing" component={ AddListing } />
        <Route path="/wishlist" component={ Wishlist } />
        <Route path="/order-tracking" component={ OrderTracking } />
        <Route path="/history" component={ History } />

        <Route path="/off-plan" component={ OffPlan } />


        <Route path="/listings" component={ Listings } />
        <Route path="/property-details/:id" component={ ProdductDetails } />
        <Route path="/contact-us" component={ NewContact } />
        <Route path="/our-team" component={ TeamsNew } />

        <Route path="/property/:type" component={ PropertyType } />
     

        <Route path="/carousel/:id" component={ CarouselDetails } />
        <Route path="/about-us" component={ aboutUs } />
        <Route path="/shop-page" component={ ShopNew } />
        <Route path="/community" component={ GuideLine } />
        <Route path="/bread-crums" component={ BreadCrumbs } />
        <Route path="/curousals-types" component={ CurousalTypes } />



    </Switch>
    </div>
    </BrowserRouter>




)
 }
 
 export default App