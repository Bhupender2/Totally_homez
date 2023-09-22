import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


const CounterFeatures = (props) => {
	let customClass = props.customClass ? props.customClass :''
let publicUrl = process.env.PUBLIC_URL+'/'
  return (
	<div className={customClass}>
	<div className="ltn__counterup-area  pt-40">
			  <div className="container">
			    <div className="row">
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item ltn__team-item text-color-white---">
			          <div className="counter-icon">
			            {/* <i className="flaticon-select" /> */}
						{/* <i class="fa fa-video-camera"></i> */}
<img src="assets/img/cctv.png" style={{"width":"25%"}}/>			          </div>
			          <h1><span className="">24/7</span>{" "}<span className=""></span> </h1>
			          <h6>CCTV</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item ltn__team-item text-color-white---">
			          <div className="counter-icon">
					  <img src="assets/img/smartHome.png" style={{"width":"25%"}}/>			          </div>
			          <h1><span className="">Smart</span>{" "}<span></span><span className="counterUp-icon"></span> </h1>
			          <h6>Home

</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item  ltn__team-item text-color-white---">
			          <div className="counter-icon">
			            {/* <i className="flaticon-excavator" /> */}
						<img src="assets/img/swimming-pool.png" style={{"width":"25%"}}/>
			          </div>
			          <h1><span className="">Infinity</span><span></span> </h1>
			          <h6>Pools

</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item ltn__team-item text-color-white---">
			          <div className="counter-icon">
			            {/* <i className="flaticon-armchair" /> */}
						<img src="assets/img/furnished.png" style={{"width":"25%"}}/>
			          </div>
			          <h1><span className="">Furnished</span><span></span> </h1>
			          <h6>Residences

</h6>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
	</div>

  )
}

export default CounterFeatures

