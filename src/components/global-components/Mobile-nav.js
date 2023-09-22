import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';


const MobileNav = () => {
	const [isCrossDisabled,setIsCrossDisabled]=useState(false)
	let publicUrl = process.env.PUBLIC_URL + '/'
	let imgattr = 'logo'
	let anchor = '#'
	const handelCrossIconClick=()=>{
		setIsCrossDisabled(true)
	}
	return (
		<div>
			<header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile ltn__header-logo-and-mobile-menu ltn__header-transparent gradient-color-4---">

				<div className="ltn__header-middle-area ltn__header-sticky ltn__sticky-bg-black">
					<div className="container">
						<div className="row">
							<div className="col">
								<div className="site-logo-wrap">
									<div className="site-logo go-top">
										<Link to="/"><img src={publicUrl + "assets/img/totallyhomeznewicon.png"} alt="Logo" /></Link>
									</div>
									<div className="get-support clearfix d-none">
										<div className="get-support-icon">
											<i className="icon-call" />
										</div>
										<div className="get-support-info">
											<h6>Get Support</h6>
											<h4><a href="tel:+123456789">123-456-789-10</a></h4>
										</div>
									</div>
								</div>
							</div>

							<div className="col--- ltn__header-options ltn__header-options-2 ">
								{/* Mobile Menu Button */}
								
								<div className="mobile-menu-toggle showItem ">
									<a href="#ltn__utilize-mobile-menu" className="ltn__utilize-toggle " onClick={handelCrossIconClick} disabled={isCrossDisabled}>
										<svg viewBox="0 0 800 600">
											<path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
											<path d="M300,320 L540,320" id="middle" />
											<path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
										</svg>
									</a>
								</div>
								<div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
									<div className="ltn__utilize-menu-inner ltn__scrollbar">
										<div className="ltn__utilize-menu-head">
											<div className="site-logo">
												<Link to="/"><img src={publicUrl + "assets/img/totallyhomeznewicon.png"} alt="Logo" /></Link>
											</div>
											<button className="ltn__utilize-close">×</button>
										</div>
										<div className="ltn__utilize-menu-search-form">
											<form action={"#"}>
												<input type="text" placeholder="Search..." />
												<button><i className="fas fa-search" /></button>
											</form>
										</div>
										<div className="ltn__utilize-menu">
											<ul>
												<li><a href="#">Home</a>

												</li>
												<li><Link to="/shop">Buy</Link>
													<ul className="sub-menu">
														<li><Link to="/shop">Apartments</Link></li>
														<li><Link to="/shop">Villas</Link></li>
														<li><Link to="/shop">Penthouse</Link></li>
														<li><Link to="/shop">Townhouse</Link></li>
														<li><Link to="/shop"> Off Plan</Link></li>

													</ul>
												</li>
												<li><Link to="/shop">Rent</Link>
													<ul className="sub-menu">
														<li><Link to="/shop">Apartments</Link></li>
														<li><Link to="/shop">Villas</Link></li>
														<li><Link to="/shop">Penthouse</Link></li>
														<li><Link to="/shop">Townhouse</Link></li>

													</ul></li>
												<li><Link to="/off-plan">Off Plan</Link>

												</li>
												<li><Link to="#">Exclusive Properties</Link>

												</li>
												<li><Link to="/contact-us">Explore Dubai</Link></li>
												<li><Link to="/contact-us">Our Mission</Link></li>
												<li><Link to="/contact-us">Contact</Link></li>
											</ul>
										</div>

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</header>

		</div>
	)
}

export default MobileNav




