import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TestimonialV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__testimonial-area bg-image pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/8.jpg"}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center---">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Testimonials</h6>
						<h1 className="section-title">Clients Feedbacks</h1>
					</div>
					</div>
				</div>
				<div className="row ltn__testimonial-slider-2-active slick-arrow-3">
					<div className="col-lg-12">
					<div className="ltn__testimonial-item ltn__testimonial-item-3">
						<div className="ltn__testimonial-img">
						<img src={publicUrl+"assets/img/blog/4.jpg"} alt="#" />
						</div>
						<div className="ltn__testimoni-info">
						<p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
						<div className="ltn__testimoni-info-inner">
							<div className="ltn__testimoni-img">
							<img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="#" />
							</div>
							<div className="ltn__testimoni-name-designation">
							<h4>Jacob William</h4>
							<h6>Founder, Browni Co.</h6>
							</div>
						</div>
						<div className="ltn__testimoni-bg-icon">
							<i className="far fa-comments" />
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__testimonial-item ltn__testimonial-item-3">
						<div className="ltn__testimonial-img">
						<img src={publicUrl+"assets/img/blog/5.jpg"} alt="#" />
						</div>
						<div className="ltn__testimoni-info">
						<p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
						<div className="ltn__testimoni-info-inner">
							<div className="ltn__testimoni-img">
							<img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
							</div>
							<div className="ltn__testimoni-name-designation">
							<h4>Ethan James</h4>
							<h6>Admin</h6>
							</div>
						</div>
						<div className="ltn__testimoni-bg-icon">
							<i className="far fa-comments" />
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__testimonial-item ltn__testimonial-item-3">
						<div className="ltn__testimonial-img">
						<img src={publicUrl+"assets/img/blog/6.jpg"} alt="#" />
						</div>
						<div className="ltn__testimoni-info">
						<p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
						<div className="ltn__testimoni-info-inner">
							<div className="ltn__testimoni-img">
							<img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="#" />
							</div>
							<div className="ltn__testimoni-name-designation">
							<h4>Jacob William</h4>
							<h6>Founder, Browni Co.</h6>
							</div>
						</div>
						<div className="ltn__testimoni-bg-icon">
							<i className="far fa-comments" />
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__testimonial-item ltn__testimonial-item-3">
						<div className="ltn__testimonial-img">
						<img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" />
						</div>
						<div className="ltn__testimoni-info">
						<p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
						<div className="ltn__testimoni-info-inner">
							<div className="ltn__testimoni-img">
							<img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="#" />
							</div>
							<div className="ltn__testimoni-name-designation">
							<h4>Liam Mason</h4>
							<h6>Officer</h6>
							</div>
						</div>
						<div className="ltn__testimoni-bg-icon">
							<i className="far fa-comments" />
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__testimonial-item ltn__testimonial-item-3">
						<div className="ltn__testimonial-img">
						<img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" />
						</div>
						<div className="ltn__testimoni-info">
						<p>Lorem ipsum ctetur elit, sed do eius mod tempor incididunt ut labore et dolore magna aliqua. </p>
						<div className="ltn__testimoni-info-inner">
							<div className="ltn__testimoni-img">
							<img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="#" />
							</div>
							<div className="ltn__testimoni-name-designation">
							<h4>Noah Alexander</h4>
							<h6>Professor</h6>
							</div>
						</div>
						<div className="ltn__testimoni-bg-icon">
							<i className="far fa-comments" />
						</div>
						</div>
					</div>
					</div>
					{/*  */}
				</div>
				</div>
			</div>
  
        }
}

export default TestimonialV4