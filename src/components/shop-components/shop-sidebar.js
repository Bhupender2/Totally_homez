import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
		<div className="col-lg-4  mb-100">
			<aside className="sidebar ltn__shop-sidebar">
			<h3 className="mb-10">Advance Information</h3>
			<label className="mb-30"><small>About 9,620 results (0.62 seconds) </small></label>
			{/* Advance Information widget */}
			<div className="widget ltn__menu-widget">
				<h4 className="ltn__widget-title">Property Type</h4>
				<ul>
				<li>
					<label className="checkbox-item">House
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,924</span>
				</li>
				<li>
					<label className="checkbox-item">Single Family
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,610</span>
				</li>
				<li>
					<label className="checkbox-item">Apartment
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,912</span>
				</li>
				<li>
					<label className="checkbox-item">Office Villa
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,687</span>
				</li>
				<li>
					<label className="checkbox-item">Luxary Home
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">1,853</span>
				</li>
				<li>
					<label className="checkbox-item">Studio
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">893</span>
				</li>
				</ul>
				<hr />
				<h4 className="ltn__widget-title">Amenities</h4>
				<ul>
				<li>
					<label className="checkbox-item">Dishwasher
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,924</span>
				</li>
				<li>
					<label className="checkbox-item">Floor Coverings
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,610</span>
				</li>
				<li>
					<label className="checkbox-item">Internet
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,912</span>
				</li>
				<li>
					<label className="checkbox-item">Build Wardrobes
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,687</span>
				</li>
				<li>
					<label className="checkbox-item">Supermarket
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">1,853</span>
				</li>
				<li>
					<label className="checkbox-item">Kids Zone
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">893</span>
				</li>
				</ul>
				<hr />
				<h4 className="ltn__widget-title">Price Renge</h4>
				<ul>
				<li>
					<label className="checkbox-item">Low Budget
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">$5,000 - $10,000</span>
				</li>
				<li>
					<label className="checkbox-item">Medium
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">$10,000 - $30,000</span>
				</li>
				<li>
					<label className="checkbox-item">High Budget
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">$30,000 Up</span>
				</li>
				</ul>
				<hr />
				{/* Price Filter Widget */}
				<div className="widget--- ltn__price-filter-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border---">Filter by price</h4>
				<div className="price_filter">
					<div className="price_slider_amount">
					<input type="submit" defaultValue="Your range:" /> 
					<input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
					</div>
					<div className="slider-range" />
				</div>
				</div>
				<hr />
				<h4 className="ltn__widget-title">Bed/bath</h4>
				<ul>
				<li>
					<label className="checkbox-item">Single
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,924</span>
				</li>
				<li>
					<label className="checkbox-item">Double
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,610</span>
				</li>
				<li>
					<label className="checkbox-item">Up To 3
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,912</span>
				</li>
				<li>
					<label className="checkbox-item">Up To 5
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,687</span>
				</li>
				</ul>
				<hr />
				<h4 className="ltn__widget-title">Catagory</h4>
				<ul>
				<li>
					<label className="checkbox-item">Buying
					<input type="checkbox" defaultChecked="checked" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,924</span>
				</li>
				<li>
					<label className="checkbox-item">Renting
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">3,610</span>
				</li>
				<li>
					<label className="checkbox-item">Selling
					<input type="checkbox" />
					<span className="checkmark" />
					</label>
					<span className="categorey-no">2,912</span>
				</li>
				</ul>
			</div>
			{/* Category Widget */}
			<div className="widget ltn__menu-widget d-none">
				<h4 className="ltn__widget-title ltn__widget-title-border">Product categories</h4>
				<ul>
				<li><a href="#">Body <span><i className="fas fa-long-arrow-alt-right" /></span></a></li>
				<li><a href="#">Interior <span><i className="fas fa-long-arrow-alt-right" /></span></a></li>
				<li><a href="#">Lights <span><i className="fas fa-long-arrow-alt-right" /></span></a></li>
				<li><a href="#">Parts <span><i className="fas fa-long-arrow-alt-right" /></span></a></li>
				<li><a href="#">Tires <span><i className="fas fa-long-arrow-alt-right" /></span></a></li>
				<li><a href="#">Uncategorized <span><i className="fas fa-long-arrow-alt-right" /></span></a></li>
				<li><a href="#">Wheel <span><i className="fas fa-long-arrow-alt-right" /></span></a></li>
				</ul>
			</div>
			{/* Price Filter Widget */}
			<div className="widget ltn__price-filter-widget d-none">
				<h4 className="ltn__widget-title ltn__widget-title-border">Filter by price</h4>
				<div className="price_filter">
				<div className="price_slider_amount">
					<input type="submit" defaultValue="Your range:" /> 
					<input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
				</div>
				<div className="slider-range" />
				</div>
			</div>
			{/* Top Rated Product Widget */}
			<div className="widget ltn__top-rated-product-widget d-none">
				<h4 className="ltn__widget-title ltn__widget-title-border">Top Rated Product</h4>
				<ul>
				<li>
					<div className="top-rated-product-item clearfix">
					<div className="top-rated-product-img">
						<a href="product-details.html"><img src="img/product/1.png" alt="#" /></a>
					</div>
					<div className="top-rated-product-info">
						<div className="product-ratting">
						<ul>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
						</ul>
						</div>
						<h6><a href="product-details.html">Mixel Solid Seat Cover</a></h6>
						<div className="product-price">
						<span>$49.00</span>
						<del>$65.00</del>
						</div>
					</div>
					</div>
				</li>
				<li>
					<div className="top-rated-product-item clearfix">
					<div className="top-rated-product-img">
						<a href="product-details.html"><img src="img/product/2.png" alt="#" /></a>
					</div>
					<div className="top-rated-product-info">
						<div className="product-ratting">
						<ul>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
						</ul>
						</div>
						<h6><a href="product-details.html">Brake Conversion Kit</a></h6>
						<div className="product-price">
						<span>$49.00</span>
						<del>$65.00</del>
						</div>
					</div>
					</div>
				</li>
				<li>
					<div className="top-rated-product-item clearfix">
					<div className="top-rated-product-img">
						<a href="product-details.html"><img src="img/product/3.png" alt="#" /></a>
					</div>
					<div className="top-rated-product-info">
						<div className="product-ratting">
						<ul>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star" /></a></li>
							<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
							<li><a href="#"><i className="far fa-star" /></a></li>
						</ul>
						</div>
						<h6><a href="product-details.html">Coil Spring Conversion</a></h6>
						<div className="product-price">
						<span>$49.00</span>
						<del>$65.00</del>
						</div>
					</div>
					</div>
				</li>
				</ul>
			</div>
			{/* Search Widget */}
			<div className="widget ltn__search-widget d-none">
				<h4 className="ltn__widget-title ltn__widget-title-border">Search Objects</h4>
				<form action="#">
				<input type="text" name="search" placeholder="Search your keyword..." />
				<button type="submit"><i className="fas fa-search" /></button>
				</form>
			</div>
			{/* Tagcloud Widget */}
			<div className="widget ltn__tagcloud-widget d-none">
				<h4 className="ltn__widget-title ltn__widget-title-border">Popular Tags</h4>
				<ul>
				<li><a href="#">Popular</a></li>
				<li><a href="#">desgin</a></li>
				<li><a href="#">ux</a></li>
				<li><a href="#">usability</a></li>
				<li><a href="#">develop</a></li>
				<li><a href="#">icon</a></li>
				<li><a href="#">Car</a></li>
				<li><a href="#">Service</a></li>
				<li><a href="#">Repairs</a></li>
				<li><a href="#">Auto Parts</a></li>
				<li><a href="#">Oil</a></li>
				<li><a href="#">Dealer</a></li>
				<li><a href="#">Oil Change</a></li>
				<li><a href="#">Body Color</a></li>
				</ul>
			</div>
			{/* Size Widget */}
			<div className="widget ltn__tagcloud-widget ltn__size-widget d-none">
				<h4 className="ltn__widget-title ltn__widget-title-border">Product Size</h4>
				<ul>
				<li><a href="#">S</a></li>
				<li><a href="#">M</a></li>
				<li><a href="#">L</a></li>
				<li><a href="#">XL</a></li>
				<li><a href="#">XXL</a></li>
				</ul>
			</div>
			{/* Color Widget */}
			<div className="widget ltn__color-widget d-none">
				<h4 className="ltn__widget-title ltn__widget-title-border">Product Color</h4>
				<ul>
				<li className="black"><a href="#" /></li>
				<li className="white"><a href="#" /></li>
				<li className="red"><a href="#" /></li>
				<li className="silver"><a href="#" /></li>
				<li className="gray"><a href="#" /></li>
				<li className="maroon"><a href="#" /></li>
				<li className="yellow"><a href="#" /></li>
				<li className="olive"><a href="#" /></li>
				<li className="lime"><a href="#" /></li>
				<li className="green"><a href="#" /></li>
				<li className="aqua"><a href="#" /></li>
				<li className="teal"><a href="#" /></li>
				<li className="blue"><a href="#" /></li>
				<li className="navy"><a href="#" /></li>
				<li className="fuchsia"><a href="#" /></li>
				<li className="purple"><a href="#" /></li>
				<li className="pink"><a href="#" /></li>
				<li className="nude"><a href="#" /></li>
				<li className="orange"><a href="#" /></li>
				<li><a href="#" className="orange" /></li>
				<li><a href="#" className="orange" /></li>
				</ul>
			</div>
			{/* Banner Widget */}
			<div className="widget ltn__banner-widget d-none">
				<a href="shop.html"><img src="img/banner/banner-2.jpg" alt="#" /></a>
			</div>
			</aside>
		</div>
    )
  }
}

export default Sidebar;
