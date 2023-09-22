import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const ProductSliderV1 = () => {
	let publicUrl = process.env.PUBLIC_URL + '/'

	return (
		<div>
			<div>

				<div className="ltn__product-slider-area ltn__product-gutter  ">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title-area ltn__section-title-2--- text-center">
									{/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Properties</h6>
			  <h1 className="section-title">Featured Listings</h1> */}
								</div>
							</div>
						</div>
						<div className="row ltn__product-slider-item-four-active-full-width slick-arrow-1 ">
							{/* ltn__product-item */}
							<div className="col-lg-12">
								<div className="ltn__product-item ltn__product-item-4 text-center---">
									<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/1.jpg"} alt="#" /></Link>
										<div className="product-badge">
											<ul>
												<li className="sale-badge bg-green">For Rent</li>
											</ul>
										</div>
										<div className="product-img-location-gallery">
											<div className="product-img-location">
												<ul>
													<li>
													</li>
												</ul>
											</div>

										</div>
									</div>
									<div className="product-info">
										<div className="product-price">
											<span>AED 34,900</span>
										</div>
										<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
										<div className="product-description">
											<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>

										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
											<li><span>3 <i className="flaticon-bed" /></span>
												Bedrooms
											</li>
											<li><span>2 <i className="flaticon-clean" /></span>
												Bathrooms
											</li>
											<li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
												square Ft
											</li>
										</ul>
									</div>
									<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img go-top">
												<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief go-top">
												<h6><Link to="/team-details">William Seklo</Link></h6>
												<small>Ref No.LP17443</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
												<li>
													<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
														<i style={{ fontSize: "1.5em" }} className="fab fa-whatsapp" />
													</a>
												</li>
												<li>
													<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
														<i style={{ fontSize: "1.5em" }} className="fa fa-phone" /></a>
												</li>

											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-lg-12">
								<div className="ltn__product-item ltn__product-item-4 text-center---">
									<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/2.jpg"} alt="#" /></Link>
										<div className="product-badge">
											<ul>
												<li className="sale-badge bg-green">For Rent</li>

											</ul>
										</div>

									</div>
									<div className="product-info">
										<div className="product-price">
											<span>AED 34,900</span>
										</div>
										<h2 className="product-title go-top"><Link to="/product-details">Modern Apartments</Link></h2>
										<div className="product-description">
											<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>

										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
											<li><span>3 <i className="flaticon-bed" /></span>
												Bedrooms
											</li>
											<li><span>2 <i className="flaticon-clean" /></span>
												Bathrooms
											</li>
											<li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
												square Ft
											</li>
										</ul>
									</div>
									<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img go-top">
												<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief go-top">
												<h6><Link to="/team-details">William Seklo</Link></h6>
												<small>Ref No.LP17443</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
												<li>
													<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
														<i style={{ fontSize: "1.5rem" }} className="fab fa-whatsapp" />
													</a>
												</li>
												<li>
													<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
														<i style={{ fontSize: "1.5rem" }} className="fa fa-phone" /></a>
												</li>

											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-lg-12">
								<div className="ltn__product-item ltn__product-item-4 text-center---">
									<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/3.jpg"} alt="#" /></Link>
										<div className="product-badge">
											<ul>
												<li className="sale-badge bg-green">For Rent</li>
											</ul>
										</div>

									</div>
									<div className="product-info">
										<div className="product-price">
											<span>AED 34,900</span>
										</div>
										<h2 className="product-title go-top"><Link to="/product-details">Comfortable Apartment</Link></h2>
										<div className="product-description">
											<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>

										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
											<li><span>3 <i className="flaticon-bed" /></span>
												Bedrooms
											</li>
											<li><span>2 <i className="flaticon-clean" /></span>
												Bathrooms
											</li>
											<li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
												square Ft
											</li>
										</ul>
									</div>
									<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img go-top">
												<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief go-top">
												<h6><Link to="/team-details">William Seklo</Link></h6>
												<small>Ref No.LP17443</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
												<li>
													<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
														<i style={{ fontSize: "1.5em" }} className="fab fa-whatsapp" />
													</a>
												</li>
												<li>
													<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
														<i style={{ fontSize: "1.5em" }} className="fa fa-phone" /></a>
												</li>

											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-lg-12">
								<div className="ltn__product-item ltn__product-item-4 text-center--- ">
									<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/4.jpg"} alt="#" /></Link>
										<div className="product-badge">
											<ul>
												<li className="sale-badge bg-green">For Rent</li>
											</ul>
										</div>

									</div>
									<div className="product-info">
										<div className="product-price">
											<span>AED 34,900</span>
										</div>
										<h2 className="product-title go-top"><Link to="/product-details">Luxury villa in Rego Park </Link></h2>
										<div className="product-description">
											<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>

										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
											<li><span>3 <i className="flaticon-bed" /></span>
												Bedrooms
											</li>
											<li><span>2 <i className="flaticon-clean" /></span>
												Bathrooms
											</li>
											<li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
												square Ft
											</li>
										</ul>
									</div>
									<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img go-top">
												<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief go-top">
												<h6><Link to="/team-details">William Seklo</Link></h6>
												<small>Ref No.LP17443</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
												<li>
													<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
														<i style={{ fontSize: "1.5em" }} className="fab fa-whatsapp" />
													</a>
												</li>
												<li>
													<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
														<i style={{ fontSize: "1.5em" }} className="fa fa-phone" /></a>
												</li>

											</ul>
										</div>
									</div>
								</div>
							</div>
							{/* ltn__product-item */}
							<div className="col-lg-12">
								<div className="ltn__product-item ltn__product-item-4 text-center---">
									<div className="product-img go-top">
										<Link to="/product-details"><img src={publicUrl + "assets/img/product-3/5.jpg"} alt="#" /></Link>
										<div className="product-badge">
											<ul>
												<li className="sale-badge bg-green">For Rent</li>
											</ul>
										</div>

									</div>
									<div className="product-info">
										<div className="product-price">
											<span>AED 34,900</span>
										</div>
										<h2 className="product-title go-top"><Link to="/product-details">Beautiful Flat in Manhattan </Link></h2>
										<div className="product-description">
											<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>

										</div>
										<ul className="ltn__list-item-2 ltn__list-item-2-before">
											<li><span>3 <i className="flaticon-bed" /></span>
												Bedrooms
											</li>
											<li><span>2 <i className="flaticon-clean" /></span>
												Bathrooms
											</li>
											<li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
												square Ft
											</li>
										</ul>
									</div>
									<div className="product-info-bottom">
										<div className="real-estate-agent">
											<div className="agent-img go-top">
												<Link to="/team-details"><img src={publicUrl + "assets/img/blog/author.jpg"} alt="#" /></Link>
											</div>
											<div className="agent-brief go-top">
												<h6><Link to="/team-details">William Seklo</Link></h6>
												<small>Ref No.LP17443</small>
											</div>
										</div>
										<div className="product-hover-action">
											<ul>
												<li>
													<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
														<i style={{ fontSize: "1.5em" }} className="fab fa-whatsapp" />
													</a>
												</li>
												<li>
													<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
														<i style={{ fontSize: "1.5em" }} className="fa fa-phone" /></a>
												</li>

											</ul>
										</div>
									</div>
								</div>
							</div>
							{/*  */}
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default ProductSliderV1

