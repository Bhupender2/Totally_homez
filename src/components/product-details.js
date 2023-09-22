//src>components>product-deatils.js

import React, { useEffect } from 'react';
import Navbar from './global-components/navbar-v3';
import PageHeader from './global-components/page-header';
import ProductSlider from './shop-components/product-slider-v1';
import ProductDetails from './shop-components/shop-details';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import BlogGrid from './blog-components/blog-grid';
import ShopGrid_V1 from './shop-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getSingalPropertyDetailsApi } from '../actions/propertiesActions';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import Loader from './Loader/Loader';
import { useHistory } from "react-router-dom";
import PageForm from './section-components/page-form';
import MobileNav from './global-components/Mobile-nav';
import TownhouseProductGrid from './shop-components/TownhouseProductGrid';
import StickyBarIcon from './shop-components/sticky-iconbar';

const Product_Details = () => {
    const { id } = useParams()
    console.log(id)
    const { loading, propertyDetails } = useSelector((state) => state.propertyDetails);
    const dispatch = useDispatch()
    let history = useHistory();
    useEffect(() => {
        dispatch(getSingalPropertyDetailsApi(id))
    }, [dispatch])


    if (loading) {
        return (
            <Loader />
        )
    }
    return <div>
        <MobileNav />
        <div className='parentDiv'>
            <div className='fitSlider'>
                <ProductSlider propertyDetails={propertyDetails} className="child1" />
            </div>
            <div className='child2'>
                {/* <div className='leftContent'>
                    <div className='backBtn centerIt' onClick={()=>history.goBack()}>
                        <i class="fas fa-arrow-left colArrow" alt="Arrow Icon"></i>
                        <span className='ml'>Back</span>
                    </div>
                    <div className='section-2'>
                        <div>Stunning Fully Upgraded Villa with Private Pool <br />AED 10,500,000</div>
                        <div className='section-2a'>
                            <div className='section-2a-align'>
                                <i class="flaticon-double-bed"></i>
                                <span>5 Bedrooms</span>
                            </div>
                            <div className='section-2a-align'>
                                <i class="flaticon-home-2"></i>
                                <span>BUA: 3,700 Sq Ft</span>
                            </div>
                            <div className='section-2a-align'>
                                <i class="flaticon-square-shape-design-interface-tool-symbol"></i>
                                <span> Ref No.: LP20774</span>
                            </div>
                        </div>
                    </div>
                </div> */}
                <div className='sideBtns'>
                    <div className="btn-wrapper go-top leftbtn mt-0 ">
                        <div className="btn btn-effect-5 theme-btn-1" to="/">Book A Viewing </div>
                    </div>
                    <div className="btn-wrapper go-top rightBtn mt-0">
                        <div className="btn btn-effect-5 theme-btn-1" to="/">Contact Agent</div>
                    </div>
                </div>
            </div>
        </div>
        <PageHeader propertyDetails={propertyDetails} headertitle="Garden Homes Frond C" customclass="mb-0" />
        <ProductDetails propertyDetails={propertyDetails} />
        <ShopGrid_V1/>
        <TownhouseProductGrid />
        <PageForm/>
        <CallToActionV1 />
        <Footer />
        <StickyBarIcon/>

    </div>
}

export default Product_Details
