import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const  UpcomingProductV1= () => {
	let publicUrl = process.env.PUBLIC_URL+'/'

  return (
	<div>
		<div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-40 " data-bs-bg={publicUrl+"assets/img/bg/22.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Best Villas</h6>
			          <h1 className="section-title  white-color">Best Villas In Dubai
			            </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__upcoming-project-slider-1-active slick-arrow-3">
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/product-3/3.jpg"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                {/* <h6 className="section-subtitle ltn__secondary-color mb-0">Villas</h6> */}
			                <h1 className="mb-30">Villas</h1>
			                <ul className="mt">
			                  <li>1. Project Name: <span>Quarter</span></li>
			                  <li>2. Project Type: <span>Apartment / Home</span></li>
			                  <li>3. Building Location: <span>New York, USA</span></li>
			                  <li>4. No. Of Apartments: <span>568</span></li>
			                  <li>5. Total Investment: <span>$14,500,00</span></li>
			                </ul>
			                <div className="btn-wrapper animated go-top">
			                  <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Buy Now</Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                {/* <h6 className="ltn__secondary-color">About Projects</h6> */}
			                <h1>Villas</h1>
			                <ul>
			                  <li>1. Project Name: <span>Quarter</span></li>
			                  <li>2. Project Type: <span>Apartment / Home</span></li>
			                  <li>3. Building Location: <span>New York, USA</span></li>
			                  <li>4. No. Of Apartments: <span>568</span></li>
			                  <li>5. Total Investment: <span>$14,500,00</span></li>
			                </ul>
			                <div className="btn-wrapper animated go-top">
			                  <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Buy Now</Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/* upcoming-project-item */}
			      <div className="col-lg-12">
			        <div className="ltn__upcoming-project-item">
			          <div className="row">
			            <div className="col-lg-7">
			              <div className="ltn__upcoming-project-img">
			                <img src={publicUrl+"assets/img/product-3/7.jpg"} alt="#" />
			              </div>
			            </div>
			            <div className="col-lg-5 section-bg-1">
			              <div className="ltn__upcoming-project-info ltn__menu-widget">
			                {/* <h6 className="ltn__secondary-color">About Projects</h6> */}
			                <h1>Villas</h1>
			                <ul>
			                  <li>1. Project Name: <span>Quarter</span></li>
			                  <li>2. Project Type: <span>Apartment / Home</span></li>
			                  <li>3. Building Location: <span>New York, USA</span></li>
			                  <li>4. No. Of Apartments: <span>568</span></li>
			                  <li>5. Total Investment: <span>$14,500,00</span></li>
			                </ul>
			                <div className="btn-wrapper animated go-top">
			                  <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Buy Now</Link>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			      {/*  */}
			    </div>
			  </div>
			</div>
	</div>
  )
}



export default UpcomingProductV1