import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class VideoV4 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__slider-area ltn__slider-4 position-relative ltn__primary-bg">
			<div className="ltn__slide-one-active----- slick-slide-arrow-1----- slick-slide-dots-1----- arrow-white----- ltn__slide-animation-active">
			{/* HTML5 VIDEO */}
			<video autoPlay muted loop id="myVideo">
				<source src={publicUrl+"assets/media/3.mp4"} type="video/mp4" />
			</video>
			<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-7 bg-image--- bg-overlay-theme-black-10---" data-bs-bg="img/slider/41.jpg">
				<div className="ltn__slide-item-inner text-center">
				<div className="container">
					<div className="row">
					<div className="col-lg-12 align-self-center">
						<div className="slide-item-info">
						<div className="slide-item-info-inner ltn__slide-animation">
							<h6 className="slide-sub-title white-color animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>
							<h1 className="slide-title text-uppercase white-color animated ">Find Your Dream <br /> House By Us</h1>
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

export default VideoV4