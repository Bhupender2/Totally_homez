import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const Neighbour = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
	let imagealt = 'image'
    let customClass = props.customClass ? props.customClass :''

  return (
	<div className={customClass}>
		<div className="neighbour-area section-bg-1 ">
			  <div className="container">
			    <div className="row">
			      {/* <div className="col-lg-12"> */}
			        {/* <div className="section-title-area ltn__section-title-2--- text-center---"> */}
			          {/* <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Explore Neighbour</h6>
			          <h1 className="section-title">What’s In Neighbour <br />
			            Explore Below</h1> */}
			        {/* </div> */}
			      {/* </div> */}
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__neighbour-tab-wrap">
			          <div className="ltn__tab-menu ltn__tab-menu-3--- ltn__tab-menu-4 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			            <div className="nav">
			              <a className="active show" data-bs-toggle="tab" href="#liton_tab_4_1"><img src={publicUrl+"assets/img/neighbour/2.png"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_2" ><img src={publicUrl+"assets/img/neighbour/4-5.jpeg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_3" ><img src={publicUrl+"assets/img/neighbour/56.jpeg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_4" ><img src={publicUrl+"assets/img/neighbour/78.png"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_5" ><img src={publicUrl+"assets/img/neighbour/rr.jpeg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_6" ><img src={publicUrl+"assets/img/neighbour/33.jpeg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_7" ><img src={publicUrl+"assets/img/neighbour/554.jpeg"} alt="#" /></a>
			              <a data-bs-toggle="tab" href="#liton_tab_4_8" ><img src={publicUrl+"assets/img/neighbour/dd.jpeg"} alt="#" /></a>
			            </div>
			          </div>
			          <div className="tab-content">
			            <div className="tab-pane fade active show" id="liton_tab_4_1">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/2.png"} alt="#" />
			                    </div>
			                  </div>
			                 
			                </div>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="liton_tab_4_2">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/4-5.jpeg"} alt="#" />
			                    </div>
			                  </div>
			                 
			                </div>
			              </div>
			            </div>
			            <div className="tab-pane fade" id="liton_tab_4_3">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/56.jpeg"} alt="#" />
			                    </div>
			                  </div>
			                
			                </div>
			              </div>
			            </div>
						<div className="tab-pane fade" id="liton_tab_4_4">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/78.png"} alt="#" />
			                    </div>
			                  </div>
			                
			                </div>
			              </div>
			            </div>

						<div className="tab-pane fade" id="liton_tab_4_5">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/rr.jpeg"} alt="#" />
			                    </div>
			                  </div>
			                
			                </div>
			              </div>
			            </div>
						<div className="tab-pane fade" id="liton_tab_4_6">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/33.jpeg"} alt="#" />
			                    </div>
			                  </div>
			                
			                </div>
			              </div>
			            </div>
						<div className="tab-pane fade" id="liton_tab_4_7">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/554.jpeg"} alt="#" />
			                    </div>
			                  </div>
			                
			                </div>
			              </div>
			            </div>
						<div className="tab-pane fade" id="liton_tab_4_8">
			              <div className="ltn__neighbour-tab-content-inner">
			                <div className="row">
			                  <div className="col-lg-12">
			                    <div className="neighbour-apartments-img">
			                      <img src={publicUrl+"assets/img/neighbour/dd.jpeg"} alt="#" />
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
			</div>
	</div>
  )
}



export default Neighbour