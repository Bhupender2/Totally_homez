import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const BestVillaTabs = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
	let customClass = props.customClass ? props.customClass :''
  return (
	<div className={"ltn__apartments-plan-area pt-40 "+customClass}>
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
							<h2 className="section-title">Property Of The Day</h2>

			                    <h3>Coastal Charm Lounge</h3>
			                    <p>This stunning luxury apartment is located in the heart of Downtown Dubai, just steps away from the Burj Khalifa and Dubai Mall. With high-end finishes, top-notch amenities, and breathtaking views of the city, this apartment is the epitome of luxury living.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                        <li><label>Bedroom</label> <span>2</span></li>
			                        <li><label>Bathroom</label> <span>4</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
							   <h2 className="section-title">Property Of The Day</h2>

			                    <h3>Dubai Marina</h3>
			                    <p>This stunning 2-bedroom apartment is located in the heart of Dubai Marina, offering spectacular views of the waterfront and a luxurious lifestyle.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                        <li><label>Bedroom</label> <span>6 </span></li>
			                        <li><label>Bathroom</label> <span>4</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
							<h2 className="section-title">Property Of The Day</h2>

			                    <h3>The Crown Building</h3>
			                    <p>This spacious commercial space is located in the bustling area of Downtown Dubai, perfect for businesses looking to establish a presence in a prime location.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                        <li><label>Bedroom</label> <span>5 </span></li>
			                        <li><label>Bathroom</label> <span>4</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
							<h2 className="section-title">Property Of The Day</h2>

			                    <h3> Ultimate Vision Apartments</h3>
			                    <p>With a focus on sustainability and energy efficiency, it's the perfect choice for businesses looking to make a positive impact. Don't miss this opportunity to elevate your business in a premier location.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                        <li><label>Bedroom</label> <span>1</span></li>
			                        <li><label>Bathroom</label> <span>4</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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
							<h2 className="section-title">Property Of The Day</h2>

			                    <h3>Greenview Plots</h3>
			                    <p>a collection of prime residential plots located in a serene and picturesque environment. Nestled in the heart of a lush green landscape, these plots offer the perfect canvas for your dream home.</p>
			                    <div className="apartments-info-list apartments-info-list-color mt-40">
			                      <ul>
			                        <li><label>Total Area</label> <span>2800 Sq. Ft</span></li>
			                        <li><label>Bedroom</label> <span>150 Sq. Ft</span></li>
			                        <li><label>Bathroom</label> <span>45 Sq. Ft</span></li>
			                        <li><label>Belcony/Pets</label> <span>Allowed</span></li>
			                        <li><label>Lounge</label> <span>650 Sq. Ft</span></li>
			                      </ul>
			                    </div>
			                  </div>
			                </div>
			                <div className="col-lg-5">
			                  <div className="apartments-plan-img">
			                    <img src={publicUrl+"assets/img/others/10.png"} alt="#" />
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



export default BestVillaTabs