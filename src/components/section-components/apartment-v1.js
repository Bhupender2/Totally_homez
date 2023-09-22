import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const ApartmentV1 = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
	let customClass = props.customClass ? props.customClass :''
  return (
	<div className={"ltn__apartments-plan-area "+customClass}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Apartment Sketch</h6> */}
			        </div>
			        <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			          <div className="nav">
			            <a data-bs-toggle="tab" href="#liton_tab_3_1">Buy</a>
			            <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">Rent</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_3" >Comercial </a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_4" >Off Plan</a>
			            <a data-bs-toggle="tab" href="#liton_tab_3_5" >Plots</a>
			          </div>
			        </div>
			        <div className="tab-content">
			          <div className="tab-pane fade" id="liton_tab_3_1">
			            <div className="ltn__apartments-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-7">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
							<h4 className="section-title">Property Of The Day to Buy</h4>

			                    <h3>Coastal Charm Lounge</h3>
			                    <p>This stunning luxury apartment is located in the heart of Downtown Dubai, just steps away from the Burj Khalifa and Dubai Mall. With high-end finishes, top-notch amenities, and breathtaking views of the city, this apartment is the epitome of luxury living.</p>
			                   
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={"https://cf.bstatic.com/xdata/images/hotel/max1024x768/322915557.jpg?k=432919852c2ee750a8b62c2998d931ae05e3eef1b00d599c90a670d297a9a83e&o=&hp=1"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade active show" id="liton_tab_3_2">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-7">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
							   <h4 	 className="section-title">Rental | Property Of The Day  </h4 	>
			                    <h3>Dubai Marina</h3>
			                    <p>This stunning 2-bedroom apartment is located in the heart of Dubai Marina, offering spectacular views of the waterfront and a luxurious lifestyle.</p>
			                  
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={"https://cloudfront-eu-central-1.images.arcpublishing.com/thenational/MBOZJFQOPVBZ3NKTT4WZL6XFYI.jpeg"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_3">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-7">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
							<h2 className="section-title">Commercial Property Of The Day</h2>

			                    <h3>The Crown Building</h3>
			                    <p>This spacious commercial space is located in the bustling area of Downtown Dubai, perfect for businesses looking to establish a presence in a prime location.</p>
			                
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={"https://images-cdn2.houza.com/images/properties/2023/04/14/OKPxMoKrve_plQz.jpg?profile=xs"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_4">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-7">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
							<h2 className="section-title">Off Plan Property Of The Day</h2>

			                    <h3> Ultimate Vision Apartments</h3>
			                    <p>With a focus on sustainability and energy efficiency, it's the perfect choice for businesses looking to make a positive impact. Don't miss this opportunity to elevate your business in a premier location.</p>
			                 
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={"https://thenational-the-national-prod.cdn.arcpublishing.com/resizer/DQRjiV708XS-aPTp4Yn5lSoIG_Y=/800x0/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/thenational/IEKIBD34F77MTC642ZUP5IV6N4.jpg"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_5">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-7">
			                  <div className="apartments-plan-info ltn__secondary-bg text-color-white">
							<h2 className="section-title">Plot Of The Day</h2>

			                    <h3>Greenview Plots</h3>
			                    <p>a collection of prime residential plots located in a serene and picturesque environment. Nestled in the heart of a lush green landscape, these plots offer the perfect canvas for your dream home.</p>
			                  
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={"https://dbz-images.dubizzle.com/images/2023/04/19/01e70fbc-426c-481a-8080-abff83eb0a1c/53a6cc1b8d8a4ec3b27ba7d5134f2587-.jpg?impolicy=legacy&imwidth=800"} alt="#" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
  )
}



export default ApartmentV1