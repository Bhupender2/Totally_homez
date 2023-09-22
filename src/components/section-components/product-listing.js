import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ProductListingV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return   <div>
				<div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-70">
					<div className="container">
					<div className="row">
						<div className="col-lg-12">
						<div className="section-title-area ltn__section-title-2--- text-center">
							<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Property</h6>
							<h1 className="section-title">Latest Listingssss</h1>
						</div>
						</div>
					</div>
					<div className="row ltn__product-slider-item-three-active--- slick-arrow-1">
						{/* ltn__product-item */}
						<div className="col-xl-4 col-sm-6 col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img go-top">
							<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/1.jpg"} alt="#" /></Link>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-badge">
								<ul>
								<li className="sale-badg">For Rent</li>
								</ul>
							</div>
							<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
							<div className="product-img-location">
								<ul>
								<li>
									<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
								Bed
								</li>
								<li><span>2 </span>
								Bath
								</li>
								<li><span>3450 </span>
								Square Ft
								</li>
							</ul>
							<div className="product-hover-action">
								<ul>
								<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
									<i className="flaticon-expand" />
									</a>
								</li>
								<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
									<i className="flaticon-heart-1" /></a>
								</li>
								<li className="go-top">
									<Link to="/product-details" title="Product Details">
									<i className="flaticon-add" />
									</Link>
								</li>
								</ul>
							</div>
							</div>
							<div className="product-info-bottom">
							<div className="product-price">
								<span>$34,900<label>/Month</label></span>
							</div>
							</div>
						</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-xl-4 col-sm-6 col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img go-top">
							<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/2.jpg"} alt="#" /></Link>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-badge">
								<ul>
								<li className="sale-badg">For Sale</li>
								</ul>
							</div>
							<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
							<div className="product-img-location">
								<ul>
								<li>
									<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
								Bed
								</li>
								<li><span>2 </span>
								Bath
								</li>
								<li><span>3450 </span>
								Square Ft
								</li>
							</ul>
							<div className="product-hover-action">
								<ul>
								<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
									<i className="flaticon-expand" />
									</a>
								</li>
								<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
									<i className="flaticon-heart-1" /></a>
								</li>
								<li className="go-top">
									<Link to="/product-details" title="Product Details">
									<i className="flaticon-add" />
									</Link>
								</li>
								</ul>
							</div>
							</div>
							<div className="product-info-bottom">
							<div className="product-price">
								<span>$34,900<label>/Month</label></span>
							</div>
							</div>
						</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-xl-4 col-sm-6 col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img go-top">
							<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/3.jpg"} alt="#" /></Link>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-badge">
								<ul>
								<li className="sale-badg">For Rent</li>
								</ul>
							</div>
							<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
							<div className="product-img-location">
								<ul>
								<li>
									<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
								Bed
								</li>
								<li><span>2 </span>
								Bath
								</li>
								<li><span>3450 </span>
								Square Ft
								</li>
							</ul>
							<div className="product-hover-action">
								<ul>
								<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
									<i className="flaticon-expand" />
									</a>
								</li>
								<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
									<i className="flaticon-heart-1" /></a>
								</li>
								<li className="go-top">
									<Link to="/product-details" title="Product Details">
									<i className="flaticon-add" />
									</Link>
								</li>
								</ul>
							</div>
							</div>
							<div className="product-info-bottom">
							<div className="product-price">
								<span>$34,900<label>/Month</label></span>
							</div>
							</div>
						</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-xl-4 col-sm-6 col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img go-top">
							<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/4.jpg"} alt="#" /></Link>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-badge">
								<ul>
								<li className="sale-badg">For Rent</li>
								</ul>
							</div>
							<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
							<div className="product-img-location">
								<ul>
								<li>
									<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
								Bed
								</li>
								<li><span>2 </span>
								Bath
								</li>
								<li><span>3450 </span>
								Square Ft
								</li>
							</ul>
							<div className="product-hover-action">
								<ul>
								<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
									<i className="flaticon-expand" />
									</a>
								</li>
								<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
									<i className="flaticon-heart-1" /></a>
								</li>
								<li className="go-top">
									<Link to="/product-details" title="Product Details">
									<i className="flaticon-add" />
									</Link>
								</li>
								</ul>
							</div>
							</div>
							<div className="product-info-bottom">
							<div className="product-price">
								<span>$34,900<label>/Month</label></span>
							</div>
							</div>
						</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-xl-4 col-sm-6 col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img go-top">
							<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/5.jpg"} alt="#" /></Link>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-badge">
								<ul>
								<li className="sale-badg">For Rent</li>
								</ul>
							</div>
							<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
							<div className="product-img-location">
								<ul>
								<li>
									<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
								Bed
								</li>
								<li><span>2 </span>
								Bath
								</li>
								<li><span>3450 </span>
								Square Ft
								</li>
							</ul>
							<div className="product-hover-action">
								<ul>
								<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
									<i className="flaticon-expand" />
									</a>
								</li>
								<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
									<i className="flaticon-heart-1" /></a>
								</li>
								<li className="go-top">
									<Link to="/product-details" title="Product Details">
									<i className="flaticon-add" />
									</Link>
								</li>
								</ul>
							</div>
							</div>
							<div className="product-info-bottom">
							<div className="product-price">
								<span>$34,900<label>/Month</label></span>
							</div>
							</div>
						</div>
						</div>
						{/* ltn__product-item */}
						<div className="col-xl-4 col-sm-6 col-12">
						<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
							<div className="product-img go-top">
							<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/6.jpg"} alt="#" /></Link>
							<div className="real-estate-agent">
								<div className="agent-img">
								<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
								</div>
							</div>
							</div>
							<div className="product-info">
							<div className="product-badge">
								<ul>
								<li className="sale-badg">For Rent</li>
								</ul>
							</div>
							<h2 className="product-title go-top"><Link to="/product-details">New Apartment Nice View</Link></h2>
							<div className="product-img-location">
								<ul>
								<li>
									<Link to="/contact"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
								</li>
								</ul>
							</div>
							<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
								<li><span>3 </span>
								Bed
								</li>
								<li><span>2 </span>
								Bath
								</li>
								<li><span>3450 </span>
								Square Ft
								</li>
							</ul>
							<div className="product-hover-action">
								<ul>
								<li>
									<a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
									<i className="flaticon-expand" />
									</a>
								</li>
								<li>
									<a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
									<i className="flaticon-heart-1" /></a>
								</li>
								<li className="go-top">
									<Link to="/product-details" title="Product Details">
									<i className="flaticon-add" />
									</Link>
								</li>
								</ul>
							</div>
							</div>
							<div className="product-info-bottom">
							<div className="product-price">
								<span>$34,900<label>/Month</label></span>
							</div>
							</div>
						</div>
						</div>
						{/*  */}
					</div>
					</div>
				</div>
				<div className="ltn__modal-area ltn__add-to-cart-modal-area">
					<div className="modal fade" id="liton_wishlist_modal" tabIndex={-1}>
						<div className="modal-dialog modal-md" role="document">
						<div className="modal-content">
							<div className="modal-header">
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
							</div>
							<div className="modal-body">
							<div className="ltn__quick-view-modal-inner">
								<div className="modal-product-item">
								<div className="row">
									<div className="col-12">
									<div className="modal-product-img">
										<img src={publicUrl+"assets/img/product/7.png"} alt="#" />
									</div>
									<div className="modal-product-info go-top">
										<h5><Link to="/product-details">Brake Conversion Kit</Link></h5>
										<p className="added-cart"><i className="fa fa-check-circle" />  Successfully added to your Wishlist</p>
										<div className="btn-wrapper">
										<Link to="/wishlist" className="theme-btn-1 btn btn-effect-1">View Wishlist</Link>
										</div>
									</div>
									{/* additional-info */}
									<div className="additional-info d-none">
										<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
										<div className="payment-method">
										<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
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

				<div className="ltn__modal-area ltn__quick-view-modal-area">
					<div className="modal fade" id="quick_view_modal" tabIndex={-1}>
						<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
								{/* <i class="fas fa-times"></i> */}
							</button>
							</div>
							<div className="modal-body">
							<div className="ltn__quick-view-modal-inner">
								<div className="modal-product-item">
								<div className="row">
									<div className="col-lg-6 col-12">
									<div className="modal-product-img">
										<img src={publicUrl+"assets/img/product/4.png"} alt="#" />
									</div>
									</div>
									<div className="col-lg-6 col-12">
									<div className="modal-product-info">
										<div className="product-ratting">
										<ul>
											<li><a href="#"><i className="fas fa-star" /></a></li>
											<li><a href="#"><i className="fas fa-star" /></a></li>
											<li><a href="#"><i className="fas fa-star" /></a></li>
											<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
											<li><a href="#"><i className="far fa-star" /></a></li>
											<li className="review-total"> <a href="#"> ( 95 Reviews )</a></li>
										</ul>
										</div>
										<h3>Brake Conversion Kit</h3>
										<div className="product-price">
										<span>$149.00</span>
										<del>$165.00</del>
										</div>
										<div className="modal-product-meta ltn__product-details-menu-1">
										<ul>
											<li>
											<strong>Categories:</strong> 
											<span className="go-top">
												<Link to="/blog">Parts</Link>
												<Link to="/blog">Car</Link>
												<Link to="/blog">Seat</Link>
												<Link to="/blog">Cover</Link>
											</span>
											</li>
										</ul>
										</div>
										<div className="ltn__product-details-menu-2">
										<ul>
											<li>
											<div className="cart-plus-minus">
												<input type="text" defaultValue="02" name="qtybutton" className="cart-plus-minus-box" />
											</div>
											</li>
											<li>
											<a href="#" className="theme-btn-1 btn btn-effect-1" title="Add to Cart" data-bs-toggle="modal" data-bs-target="#add_to_cart_modal">
												<i className="fas fa-shopping-cart" />
												<span>ADD TO CART</span>
											</a>
											</li>
										</ul>
										</div>
										<hr />
										<div className="ltn__social-media">
										<ul>
											<li>Share:</li>
											<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
											<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
											<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
											<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
										</ul>
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

				<div className="ltn__modal-area ltn__add-to-cart-modal-area">
					<div className="modal fade" id="add_to_cart_modal" tabIndex={-1}>
						<div className="modal-dialog modal-md" role="document">
						<div className="modal-content">
							<div className="modal-header">
							<button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">×</span>
							</button>
							</div>
							<div className="modal-body">
							<div className="ltn__quick-view-modal-inner">
								<div className="modal-product-item">
								<div className="row">
									<div className="col-12">
									<div className="modal-product-img">
										<img src={publicUrl+"assets/img/product/1.png"} alt="#" />
									</div>
									<div className="modal-product-info go-top">
										<h5 className="go-top"><Link to="/product-details">Brake Conversion Kit</Link></h5>
										<p className="added-cart"><i className="fa fa-check-circle" />Successfully added to your Cart</p>
										<div className="btn-wrapper">
										<Link to="/cart" className="theme-btn-1 btn btn-effect-1">View Cart</Link>
										<Link to="/checkout" className="theme-btn-2 btn btn-effect-2">Checkout</Link>
										</div>
									</div>
									{/* additional-info */}
									<div className="additional-info d-none">
										<p>We want to give you <b>10% discount</b> for your first order, <br />  Use discount code at checkout</p>
										<div className="payment-method">
										<img src={publicUrl+"assets/img/icons/payment.png"} alt="#" />
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
			</div>
        }
}

export default ProductListingV1