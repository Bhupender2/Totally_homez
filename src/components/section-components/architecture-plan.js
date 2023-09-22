import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Neighbour from './neighbour';
import Interior from './Interior';




const ArchitechturePlan = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
	let customClass = props.customClass ? props.customClass :''
  return (
	<div className={"ltn__apartments-plan-area pt-115--- pb-70 pt-100"+customClass}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Apartment Sketch</h6> */}
			         <center> <h1 className="section-title">An  Architecturaldd Marvel</h1></center>
			        </div>
			        <div className="ltn__tab-menu ltn__tab-menu-3 ltn__tab-menu-top-right-- text-uppercase--- text-center">
			         <center> <div className="nav">
                     <a data-bs-toggle="tab" href="#liton_tab_3_1">EXTERIORS</a>
                     <a className="active show" data-bs-toggle="tab" href="#liton_tab_3_2">INTERIORS</a>
                   
                   </div></center>
			        </div>
			        <div className="tab-content">
			          <div className="tab-pane fade" id="liton_tab_3_1">
			            <div className="ltn__apartments-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-12">
			                  <div className="apartments-plan-img">
			                    {/* <img src={publicUrl+"assets/img/others/102.jpg"} alt="#" /> */}
								<Neighbour />

			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade  " id="liton_tab_3_2">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-12">
			                  <div className="apartments-plan-img">
			                    {/* <img src={publicUrl+"assets/img/others/103.jpg"} alt="#" /> */}
								{/* <Interior /> */}
								<Neighbour />

			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			          <div className="tab-pane fade" id="liton_tab_3_3">
			            <div className="ltn__product-tab-content-inner">
			              <div className="row">
			                <div className="col-lg-12">
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
			                <div className="col-lg-12">
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
			                <div className="col-lg-12">
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



export default ArchitechturePlan