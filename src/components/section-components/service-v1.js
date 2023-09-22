import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceV5 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__service-area  pt-115 pb-70 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">A QUICK GLANCE AT OUR SERVICES </h6>
						<h1 className="section-title">Our aim is to serve our clients by providing them with the best real estate services they can get, which includes, among others: </h1>
					</div>
					</div>
				</div>
				<div className="row  justify-content-center">
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Real Estate Brokeraget</Link></h3>
						<p>We help our clients buy and sell high end properties in the UAE & all over the world through our experienced real estate agents</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-mortgage" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Real Estate Investment</Link></h3>
						<p>We provide help to our clients to understand the Dubai investment market thoroughly and make informed decisions when it comes to making an investment regarding buying property</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-operator" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Property Development: </Link></h3>
						<p>We assist both investors and developers in developing their property projects through quality design, management, financial modeling and strategic planning.</p>
						</div>
					</div>
					</div>
					{/*<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house-1" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Home Buying</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-house-3" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Home Selling</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6 col-12">
					<div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
						<div className="ltn__feature-icon">
						<span><i className="flaticon-official-documents" /></span>
						</div>
						<div className="ltn__feature-info">
						<h3><Link to="/service-details">Escrow Services</Link></h3>
						<p>over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.</p>
						</div>
					</div>
					</div>*/}
				</div>
				</div>
			</div>
        }
}

export default ServiceV5