import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class CallToActonV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__call-to-action-area ltn__call-to-action-4 bg-image pt-115 pb-120 mb-120" data-bs-bg={publicUrl+"assets/img/bg/6.jpg"}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="call-to-action-inner call-to-action-inner-4 text-center">
						<div className="section-title-area ltn__section-title-2">
						<h6 className="section-subtitle ltn__secondary-color">//  any question you have  //</h6>
						<h1 className="section-title white-color">897-876-987-90</h1>
						</div>
						<div className="btn-wrapper">
						<a href="tel:+123456789" className="theme-btn-1 btn btn-effect-1">MAKE A CALL</a>
						 <span className="go-top"><Link to="/contact" className="btn btn-transparent btn-effect-4 white-color">CONTACT US</Link></span>
						</div>
					</div>
					</div>
				</div>
				</div>
				<div className="ltn__call-to-4-img-1">
				<img src={publicUrl+"assets/img/slider/21.png"} alt="#" />
				</div>
				<div className="ltn__call-to-4-img-2">
				<img src={publicUrl+"assets/img/bg/11.png"} alt="#" />
				</div>
			</div>
        }
}

export default CallToActonV3