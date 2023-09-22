import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer2 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

			$(window).scrollTop(0);

			setTimeout(function () {
				$(".quarter-overlay").fadeOut(300);
			}, 800);

		});


		$(document).on('click', '.theme-btn-1 ', function () {
			$('div').removeClass('modal-backdrop');
			$('div').removeClass('show');
			$('div').removeClass('fade');
			$('body').attr("style", "");
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"
		let customClass = this.props.customClass ? this.props.customClass : ''


		return (
			<footer className="ltn__footer-area  ">
				<div className="footer-top-area  section-bg-1 plr--5">
					<div className="container-fluid">
						<div className="row">
							<div className="col-xl-3 col-md-6 col-sm-8 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Best Neighborhood </h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/about">Downtown Dubai</Link></li>
											<li><Link to="/blog-grid">Palm Jumeirah</Link></li>
											<li><Link to="/shop">Emaar Beachfront</Link></li>
											<li><Link to="/contact">Dubai Hills Estate</Link></li>
											<li><Link to="/faq">Dubai Marina</Link></li>
											<li><Link to="/contact">Jumeirah Beach Residence</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-8 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Luxury </h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/about">Luxury Properties For Sale</Link></li>
											<li><Link to="/blog-grid">Luxury Properties For Rent</Link></li>
											<li><Link to="/shop">Luxury Penthouses For Sale</Link></li>
											<li><Link to="/contact">Luxury Penthouses For Rent</Link></li>
											<li><Link to="/faq">Luxury Villas For Sale</Link></li>
											<li><Link to="/contact">Luxury Villas For Rent</Link></li>
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-md-6 col-sm-8 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Trending </h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/cart">Exclusive Properties</Link></li>
											<li><Link to="/wishlist">Investment Property</Link></li>
											<li><Link to="/login">Investment Opportunities</Link></li>
											<li><Link to="/checkout">Off plan Villa Projects</Link></li>
											<li><Link to="/about">Plot in Dubai</Link></li>
											<li><Link to="/shop">Luxury Properties For Sale</Link></li>
											<li><Link to="/shop">Luxury Properties For Rent</Link></li>
											{/* <li><Link to="/shop">Buy Ready Villas in Dubai</Link></li>
				                <li><Link to="/shop">Townhouse for Sale in Dubai</Link></li>
				                <li><Link to="/shop">Buy Ready Townhouses in Dubai</Link></li>
				                <li><Link to="/shop">Lands in Dubai for Sale</Link></li> */}
										</ul>
									</div>
								</div>
							</div>
							<div className="col-xl-2 col-md-6 col-sm-8 col-12">
								<div className="footer-widget footer-menu-widget clearfix">
									<h4 className="footer-title">Furnished </h4>
									<div className="footer-menu go-top">
										<ul>
											<li><Link to="/login">








											</Link></li>
											<li><Link to="/my-account">Furnished Villas For Sale</Link></li>
											<li><Link to="/wishlist">Furnished Villas For Rent</Link></li>
											<li><Link to="/add-listing">Furnished Apartments For Sale</Link></li>
											<li><Link to="/faq">Furnished Apartments For Rent</Link></li>
											<li><Link to="/contact">Furnished Townhouses For Sale</Link></li>
											<li><Link to="/faq">Furnished Townhouses For Rent</Link></li>
											{/* <li><Link to="/faq">Furnished Villas for Rent</Link></li>
				                <li><Link to="/faq">Furnished Townhouses for Rent</Link></li> */}

										</ul>
									</div>
								</div>
							</div>

						</div>
					</div>
				</div>

			</footer>
		)
	}
}


export default Footer2