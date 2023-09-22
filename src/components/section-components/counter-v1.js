import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';


const CounterV1 = (props) => {
	let customClass = props.customClass ? props.customClass :''
let publicUrl = process.env.PUBLIC_URL+'/'
  return (
	<div className={customClass}>
	<div className="ltn__counterup-area pt-120 pb-70">
			  <div className="container">
			    <div className="row">
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item ltn__team-item text-color-white---">
			          <div className="counter-icon">
			            {/* <i className="flaticon-select" /> */}
						<img src="assets/img/downtown-svg.png" style={{"width":"25%"}}/>

			          </div>
			          <h1><span className="">30</span>{" "}<span className="">Minutes</span> </h1>
			          <h6>to Downtown Dubai</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item ltn__team-item text-color-white---">
			          <div className="counter-icon">
			            {/* <i className="flaticon-office" /> */}
						<img src="assets/img/2.png" style={{"width":"25%"}}/>

			          </div>
			          <h1><span className="">10</span>{" "}<span>Minutes</span><span className="counterUp-icon"></span> </h1>
			          <h6>to Dubai Marina

</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item ltn__team-item text-color-white---">
			          <div className="counter-icon">
			            {/* <i className="flaticon-excavator" /> */}
						<img src="assets/img/3.png" style={{"width":"25%"}}/>

			          </div>
			          <h1><span className="">30</span><span>Minutes</span> </h1>
			          <h6>to DXB Airport

</h6>
			        </div>
			      </div>
			      <div className="col-md-3 col-sm-6 align-self-center">
			        <div className="ltn__counterup-item ltn__team-item text-color-white---">
			          <div className="counter-icon">
			            {/* <i className="flaticon-armchair" /> */}
						<img src="assets/img/dwc-svg.png" style={{"width":"25%"}}/>

			          </div>
			          <h1><span className="">40</span><span>Minutes</span> </h1>
			          <h6>to DWC Airport

</h6>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
	</div>

  )
}

export default CounterV1

