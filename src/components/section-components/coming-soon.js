import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ComingSoon extends Component {

	componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });

    }

    render() {

    let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__coming-soon-area section-bg-2 text-color-white bg-overlay-theme-black-90 bg-image" data-bs-bg={publicUrl+"assets/img/slider/62.jpg"}>
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="coming-soon-inner">
						<div className="section-title-area ltn__section-title-2">
						<h6 className="section-subtitle ltn__secondary-color">//  Welcome to you</h6>
						<h1 className="section-title white-color">We Are Coming Soon</h1>
						<h5 className="ltn__secondary-color">August 26, 2021</h5>
						</div>
						<div className="ltn__countdown mb-20" data-countdown="2021/12/26" />
						<div className="ltn__newsletter-inner mt-50">
						<h3>Notify me when we launch</h3>
						<form  method="get" className="ltn__form-box">
							<input type="email" name="email" placeholder="Your E-mail..." />
							<button type="submit" className="btn theme-btn-1 btn-effect-1">SUBMIT</button>
						</form>
						</div>
						<div className="btn-wrapper mt-50">
						<Link to="/contact" className="btn theme-btn-2 btn-effect-2 text-uppercase">Contact Us</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ComingSoon