import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Sidebar extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
		<div className="col-lg-4 go-top">
			<aside className="sidebar-area blog-sidebar ltn__right-sidebar">
				{/* Author Widget */}
				<div className="widget ltn__author-widget">
				<div className="ltn__author-widget-inner text-center">
					<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
					<h5>Rosalina D. Willaimson</h5>
					<small>Traveller/Photographer</small>
					<div className="product-ratting">
					<ul>
						<li><a href="#"><i className="fas fa-star" /></a></li>
						<li><a href="#"><i className="fas fa-star" /></a></li>
						<li><a href="#"><i className="fas fa-star" /></a></li>
						<li><a href="#"><i className="fas fa-star-half-alt" /></a></li>
						<li><a href="#"><i className="far fa-star" /></a></li>
						<li className="review-total"> <a href="#"> ( 1 Reviews )</a></li>
					</ul>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
					<div className="ltn__social-media">
					<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
					</ul>
					</div>
				</div>
				</div>
				{/* Search Widget */}
				<div className="widget ltn__search-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Search Objects</h4>
				<form action="#">
					<input type="text" name="search" placeholder="Search your keyword..." />
					<button type="submit"><i className="fas fa-search" /></button>
				</form>
				</div>
				{/* Form Widget */}
				<div className="widget ltn__form-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Drop Messege For Book</h4>
				<form action="#">
					<input type="text" name="yourname" placeholder="Your Name*" />
					<input type="text" name="youremail" placeholder="Your e-Mail*" />
					<textarea name="yourmessage" placeholder="Write Message..." defaultValue={""} />
					<button type="submit" className="btn theme-btn-1">Send Messege</button>
				</form>
				</div>
				{/* Top Rated Product Widget */}
				<div className="widget ltn__top-rated-product-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Top Rated Product</h4>
				<ul>
					<li>
					<div className="top-rated-product-item clearfix go-top">
						<div className="top-rated-product-img">
						<Link to="/product-details"><img src={publicUrl+"assets/img/product/1.png"} alt="#" /></Link>
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
						<h6><Link to="/product-details">Luxury House In Greenville </Link></h6>
						<div className="product-price">
							<span>$30,000.00</span>
							<del>$35,000.00</del>
						</div>
						</div>
					</div>
					</li>
					<li>
					<div className="top-rated-product-item clearfix">
						<div className="top-rated-product-img">
						<Link to="/product-details"><img src={publicUrl+"assets/img/product/2.png"} alt="#" /></Link>
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
						<h6><Link to="/product-details">Apartment with Subunits</Link></h6>
						<div className="product-price">
							<span>$30,000.00</span>
							<del>$35,000.00</del>
						</div>
						</div>
					</div>
					</li>
					<li>
					<div className="top-rated-product-item clearfix">
						<div className="top-rated-product-img">
						<Link to="/product-details"><img src={publicUrl+"assets/img/product/3.png"} alt="#" /></Link>
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
						<h6><Link to="/product-details">3 Rooms Manhattan</Link></h6>
						<div className="product-price">
							<span>$30,000.00</span>
							<del>$35,000.00</del>
						</div>
						</div>
					</div>
					</li>
				</ul>
				</div>
				{/* Menu Widget (Category) */}
				<div className="widget ltn__menu-widget ltn__menu-widget-2--- ltn__menu-widget-2-color-2--- go-top">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Top Categories</h4>
				<ul>
					<li><Link to="/blog-grid">Apartments <span>(26)</span></Link></li>
					<li><Link to="/blog-grid">Picture Stodio <span>(30)</span></Link></li>
					<li><Link to="/blog-grid">Office  <span>(71)</span></Link></li>
					<li><Link to="/blog-grid">Luxary Vilas <span>(56)</span></Link></li>
					<li><Link to="/blog-grid">Duplex House <span>(60)</span></Link></li>
				</ul>
				</div>
				{/* Popular Product Widget */}
				<div className="widget ltn__popular-product-widget">       
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Properties</h4>                     
				<div className="row ltn__popular-product-widget-active slick-arrow-1">
					{/* ltn__product-item */}
					<div className="col-12">
					<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
						<div className="product-img">
						<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/6.jpg"} alt="#" /></Link>
						<div className="real-estate-agent">
							<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
							</div>
						</div>
						</div>
						<div className="product-info">
						<div className="product-price">
							<span>$349,00<label>/Month</label></span>
						</div>
						<h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
						<div className="product-img-location">
							<ul>
							<li>
								<Link to="/product-details"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
							</li>
							</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
							<li><span>3 </span>
							Bedrooms
							</li>
							<li><span>2 </span>
							Bathrooms
							</li>
							<li><span>3450 </span>
							square Ft
							</li>
						</ul>
						</div>
					</div>
					</div>
					{/* ltn__product-item */}
					<div className="col-12">
					<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
						<div className="product-img">
						<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/4.jpg"} alt="#" /></Link>
						<div className="real-estate-agent">
							<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
							</div>
						</div>
						</div>
						<div className="product-info">
						<div className="product-price">
							<span>$349,00<label>/Month</label></span>
						</div>
						<h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
						<div className="product-img-location">
							<ul>
							<li>
								<Link to="/product-details"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
							</li>
							</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
							<li><span>3 </span>
							Bedrooms
							</li>
							<li><span>2 </span>
							Bathrooms
							</li>
							<li><span>3450 </span>
							square Ft
							</li>
						</ul>
						</div>
					</div>
					</div>
					{/* ltn__product-item */}
					<div className="col-12">
					<div className="ltn__product-item ltn__product-item-4 ltn__product-item-5 text-center---">
						<div className="product-img">
						<Link to="/product-details"><img src={publicUrl+"assets/img/product-3/5.jpg"} alt="#" /></Link>
						<div className="real-estate-agent">
							<div className="agent-img">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
							</div>
						</div>
						</div>
						<div className="product-info">
						<div className="product-price">
							<span>$349,00<label>/Month</label></span>
						</div>
						<h2 className="product-title"><Link to="/product-details">New Apartment Nice View</Link></h2>
						<div className="product-img-location">
							<ul>
							<li>
								<Link to="/product-details"><i className="flaticon-pin" /> Belmont Gardens, Chicago</Link>
							</li>
							</ul>
						</div>
						<ul className="ltn__list-item-2--- ltn__list-item-2-before--- ltn__plot-brief">
							<li><span>3 </span>
							Bedrooms
							</li>
							<li><span>2 </span>
							Bathrooms
							</li>
							<li><span>3450 </span>
							square Ft
							</li>
						</ul>
						</div>
					</div>
					</div>
					{/*  */}
				</div>
				</div>
				{/* Popular Post Widget */}
				<div className="widget ltn__popular-post-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Leatest Blogs</h4>
				<ul>
					<li>
					<div className="popular-post-widget-item clearfix">
						<div className="popular-post-widget-img">
						<Link to="/blog-details"><img src={publicUrl+"assets/img/team/5.jpg"} alt="#" /></Link>
						</div>
						<div className="popular-post-widget-brief">
						<h6><Link to="/blog-details">Lorem ipsum dolor sit
							cing elit, sed do.</Link></h6>
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-date">
								<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
							</li>
							</ul>
						</div>
						</div>
					</div>
					</li>
					<li>
					<div className="popular-post-widget-item clearfix">
						<div className="popular-post-widget-img">
						<Link to="/blog-details"><img src={publicUrl+"assets/img/team/6.jpg"} alt="#" /></Link>
						</div>
						<div className="popular-post-widget-brief">
						<h6><Link to="/blog-details">Lorem ipsum dolor sit
							cing elit, sed do.</Link></h6>
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-date">
								<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
							</li>
							</ul>
						</div>
						</div>
					</div>
					</li>
					<li>
					<div className="popular-post-widget-item clearfix">
						<div className="popular-post-widget-img">
						<Link to="/blog-details"><img src={publicUrl+"assets/img/team/7.jpg"} alt="#" /></Link>
						</div>
						<div className="popular-post-widget-brief">
						<h6><Link to="/blog-details">Lorem ipsum dolor sit
							cing elit, sed do.</Link></h6>
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-date">
								<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
							</li>
							</ul>
						</div>
						</div>
					</div>
					</li>
					<li>
					<div className="popular-post-widget-item clearfix">
						<div className="popular-post-widget-img">
						<Link to="/blog-details"><img src={publicUrl+"assets/img/team/8.jpg"} alt="#" /></Link>
						</div>
						<div className="popular-post-widget-brief">
						<h6><Link to="/blog-details">Lorem ipsum dolor sit
							cing elit, sed do.</Link></h6>
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-date">
								<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
							</li>
							</ul>
						</div>
						</div>
					</div>
					</li>
				</ul>
				</div>
				{/* Popular Post Widget (Twitter Post) */}
				<div className="widget ltn__popular-post-widget ltn__twitter-post-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Twitter Feeds</h4>
				<ul>
					<li>
					<div className="popular-post-widget-item clearfix">
						<div className="popular-post-widget-img">
						<Link to="/blog-details"><i className="fab fa-twitter" /></Link>
						</div>
						<div className="popular-post-widget-brief">
						<p>Carsafe - #Gutenberg ready 
							@wordpress
							Theme for Car Service, Auto Parts, Car Dealer available on 
							@website
							<a href="https://website.net">https://website.net</a></p>
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-date">
								<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
							</li>
							</ul>
						</div>
						</div>
					</div>
					</li>
					<li>
					<div className="popular-post-widget-item clearfix">
						<div className="popular-post-widget-img">
						<a href="blog-details.html"><i className="fab fa-twitter" /></a>
						</div>
						<div className="popular-post-widget-brief">
						<p>Carsafe - #Gutenberg ready 
							@wordpress
							Theme for Car Service, Auto Parts, Car Dealer available on 
							@website
							<a href="https://website.net">https://website.net</a></p>
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-date">
								<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
							</li>
							</ul>
						</div>
						</div>
					</div>
					</li>
					<li>
					<div className="popular-post-widget-item clearfix">
						<div className="popular-post-widget-img">
						<Link to="/blog-details"><i className="fab fa-twitter" /></Link>
						</div>
						<div className="popular-post-widget-brief">
						<p>Carsafe - #Gutenberg ready 
							@wordpress
							Theme for Car Service, Auto Parts, Car Dealer available on 
							@website
							<a href="https://website.net">https://website.net</a></p>
						<div className="ltn__blog-meta">
							<ul>
							<li className="ltn__blog-date">
								<Link to="#"><i className="far fa-calendar-alt" />June 22, 2020</Link>
							</li>
							</ul>
						</div>
						</div>
					</div>
					</li>
				</ul>
				</div>
				{/* Social Media Widget */}
				<div className="widget ltn__social-media-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Follow us</h4>
				<div className="ltn__social-media-2">
					<ul>
					<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
					<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
					<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
					<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
					</ul>
				</div>
				</div>
				{/* Tagcloud Widget */}
				<div className="widget ltn__tagcloud-widget go-top">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Popular Tags</h4>
				<ul>
					<li><Link to="/blog-grid">Popular</Link></li>
					<li><Link to="/blog-grid">desgin</Link></li>
					<li><Link to="/blog-grid">ux</Link></li>
					<li><Link to="/blog-grid">usability</Link></li>
					<li><Link to="/blog-grid">develop</Link></li>
					<li><Link to="/blog-grid">icon</Link></li>
					<li><Link to="/blog-grid">Car</Link></li>
					<li><Link to="/blog-grid">Service</Link></li>
					<li><Link to="/blog-grid">Repairs</Link></li>
					<li><Link to="/blog-grid">Auto Parts</Link></li>
					<li><Link to="/blog-grid">Oil</Link></li>
					<li><Link to="/blog-grid">Dealer</Link></li>
					<li><Link to="/blog-grid">Oil Change</Link></li>
					<li><Link to="/blog-grid">Body Color</Link></li>
				</ul>
				</div>
				{/* Banner Widget */}
				<div className="widget ltn__banner-widget d-none go-top">
				<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
				</div>
			</aside>
		</div>
    )
  }
}

export default Sidebar;
