import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CategoryV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__category-area ltn__product-gutter section-bg-1--- pt-115 pb-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Our Aminities</h6>
			          <h1 className="section-title">Building Aminities</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__category-slider-active--- slick-arrow-1 justify-content-center go-top">
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-car" /></span>
			            <span className="category-number">01</span>
			            <span className="category-title">Parking Space</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-swimming" /></span>
			            <span className="category-number">02</span>
			            <span className="category-title">Swimming Pool</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-secure-shield" /></span>
			            <span className="category-number">03</span>
			            <span className="category-title">Private Security</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-stethoscope" /></span>
			            <span className="category-number">04</span>
			            <span className="category-title">Medical Center</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-book" /></span>
			            <span className="category-number">05</span>
			            <span className="category-title">Library Area</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-bed-1" /></span>
			            <span className="category-number">06</span>
			            <span className="category-title">King Size Beds</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-home-2" /></span>
			            <span className="category-number">07</span>
			            <span className="category-title">Smart Homes</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			      <div className="col-lg-3 col-md-4 col-sm-6 col-6">
			        <div className="ltn__category-item ltn__category-item-5 ltn__category-item-5-2 text-center---">
			          <Link to="/shop">
			            <span className="category-icon"><i className="flaticon-slider" /></span>
			            <span className="category-number">08</span>
			            <span className="category-title">Kid’s Playland</span>
			            <span className="category-brief">
			              Enimad minim veniam quis no exercitation ullamco lab
			            </span>
			            <span className="category-btn d-none"><i className="flaticon-right-arrow" /></span>
			          </Link>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default CategoryV2