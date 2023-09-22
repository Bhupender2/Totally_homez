import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

	return <div className="ltn__feature-area pt-90 pb-90 go-top">
			<div className="container">
			<div className="row">
				<div className="col-lg-12">
				<div className="section-title-area ltn__section-title-2--- text-center">
					<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">features</h6>
					<h1 className="section-title">Core Features</h1>
				</div>
				</div>
			</div>
			<div className="row ltn__custom-gutter">
				<div className="col-lg-3 col-sm-6 col-12">
				<div className="ltn__feature-item ltn__feature-item-6">
					<div className="ltn__feature-icon">
					<span><i className="flaticon-apartment" /></span>
					</div>
					<div className="ltn__feature-info">
					<h4><Link to="/service-details">Smart living</Link></h4>
					<p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
					</div>
				</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-12">
				<div className="ltn__feature-item ltn__feature-item-6 active">
					<div className="ltn__feature-icon">
					<span><i className="flaticon-park" /></span>
					</div>
					<div className="ltn__feature-info">
					<h4><Link to="/service-details">ECO Construction</Link></h4>
					<p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
					</div>
				</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-12">
				<div className="ltn__feature-item ltn__feature-item-6">
					<div className="ltn__feature-icon">
					<span><i className="flaticon-maps-and-location" /></span>
					</div>
					<div className="ltn__feature-info">
					<h4><Link to="/service-details">Atractive Location</Link></h4>
					<p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
					</div>
				</div>
				</div>
				<div className="col-lg-3 col-sm-6 col-12">
				<div className="ltn__feature-item ltn__feature-item-6">
					<div className="ltn__feature-icon">
					<span><i className="flaticon-excavator" /></span>
					</div>
					<div className="ltn__feature-info">
					<h4><Link to="/service-details">Modern Technology</Link></h4>
					<p>Lorem ipsum dolor sit ame it, consectetur adipisicing elit, sed do eiusmod te mp or incididunt ut labore.</p>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
  
        }
}

export default ServiceV2