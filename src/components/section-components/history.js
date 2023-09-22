import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class History extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__our-history-area pb-100">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__our-history-inner">
						<div className="ltn__tab-menu text-uppercase">
						<div className="nav">
							<a data-bs-toggle="tab" href="#liton_tab_2_1">1900</a>
							<a className="active show" data-bs-toggle="tab" href="#liton_tab_2_2">1940</a>
							<a data-bs-toggle="tab" href="#liton_tab_2_3">2000</a>
							<a data-bs-toggle="tab" href="#liton_tab_2_4">2010</a>
							<a data-bs-toggle="tab" href="#liton_tab_2_5">2021</a>
						</div>
						</div>
						<div className="tab-content">
						<div className="tab-pane fade" id="liton_tab_2_1">
							<div className="ltn__product-tab-content-inner">
							<div className="row">
								<div className="col-lg-6 align-self-center">
								<div className="about-us-img-wrap about-img-left">
									<img src={publicUrl+"assets/img/img-slide/12.jpg"} alt="Image" />
									<div className="ltn__history-icon">
									<i className="fas fa-award" />
									</div>
								</div>
								</div>
								<div className="col-lg-6 align-self-center">
								<div className="about-us-info-wrap">
									<div className="section-title-area ltn__section-title-2--- text-center---">
									<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Our History</h6>
									<h1 className="section-title">We Started Our Journey</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
								</div>
								</div>
							</div>
							</div>
						</div>
						<div className="tab-pane fade active show" id="liton_tab_2_2">
							<div className="ltn__product-tab-content-inner">
							<div className="row">
								<div className="col-lg-6 align-self-center">
								<div className="about-us-img-wrap about-img-left">
									<img src={publicUrl+"assets/img/img-slide/11.jpg"} alt="Image" />
									<div className="ltn__history-icon">
									<i className="icon-award" />
									</div>
								</div>
								</div>
								<div className="col-lg-6 align-self-center">
								<div className="about-us-info-wrap">
									<div className="section-title-area ltn__section-title-2--- text-center---">
									<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
									<h1 className="section-title">It Was An Sweet
										Journey Time</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
								</div>
								</div>
							</div>
							</div>
						</div>
						<div className="tab-pane fade" id="liton_tab_2_3">
							<div className="ltn__product-tab-content-inner">
							<div className="row">
								<div className="col-lg-6 align-self-center">
								<div className="about-us-img-wrap about-img-left">
									<img src={publicUrl+"assets/img/img-slide/13.jpg"} alt="Image" />
									<div className="ltn__history-icon">
									<i className="fas fa-medal" />
									</div>
								</div>
								</div>
								<div className="col-lg-6 align-self-center">
								<div className="about-us-info-wrap">
									<div className="section-title-area ltn__section-title-2--- text-center---">
									<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
									<h1 className="section-title">It Was An Sweet
										Journey Time</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
								</div>
								</div>
							</div>
							</div>
						</div>
						<div className="tab-pane fade" id="liton_tab_2_4">
							<div className="ltn__product-tab-content-inner">
							<div className="row">
								<div className="col-lg-6 align-self-center">
								<div className="about-us-img-wrap about-img-left">
									<img src={publicUrl+"assets/img/img-slide/12.jpg"} alt="Image" />
									<div className="ltn__history-icon">
									<i className="icon-award" />
									</div>
								</div>
								</div>
								<div className="col-lg-6 align-self-center">
								<div className="about-us-info-wrap">
									<div className="section-title-area ltn__section-title-2--- text-center---">
									<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
									<h1 className="section-title">It Was An Sweet
										Journey Time</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
								</div>
								</div>
							</div>
							</div>
						</div>
						<div className="tab-pane fade" id="liton_tab_2_5">
							<div className="ltn__product-tab-content-inner">
							<div className="row">
								<div className="col-lg-6 align-self-center">
								<div className="about-us-img-wrap about-img-left">
									<img src={publicUrl+"assets/img/img-slide/11.jpg"} alt="Image" />
									<div className="ltn__history-icon">
									<i className="fas fa-trophy" />
									</div>
								</div>
								</div>
								<div className="col-lg-6 align-self-center">
								<div className="about-us-info-wrap">
									<div className="section-title-area ltn__section-title-2--- text-center---">
									<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Get rewards</h6>
									<h1 className="section-title">It Was An Sweet
										Journey Time</h1>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</p>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipis icing elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. consectetur adipis icing elit, sed do eius mod t</p>
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
	
        }
}

export default History