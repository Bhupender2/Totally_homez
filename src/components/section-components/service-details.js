import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ServiceDetails extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__page-details-area ltn__service-details-area mb-105">
				<div className="container">
				<div className="row">
					<div className="col-lg-8">
					<div className="ltn__page-details-inner ltn__service-details-inner">
						<div className="ltn__blog-img">
						<img src={publicUrl+"assets/img/service/21.jpg"} alt="Image" />
						</div>
						<p> <span className="ltn__first-letter">L</span>orem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incidi dunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exerc itation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. </p>
						<div className="row">
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/31.jpg"} alt="image" />
							<label>Image caption here.</label>
						</div>
						<div className="col-lg-6">
							<img src={publicUrl+"assets/img/service/32.jpg"} alt="image" />
						</div>
						</div>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione. </p>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
						<div className="ltn__service-list-menu text-uppercase mt-50 d-none">
						<ul>
							<li><i className="fas fa-car" /> Front Brakes Repair <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
							<li><i className="fas fa-life-ring" /> Rear Brakes Repair <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
							<li><i className="fas fa-cog" /> Axle <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
							<li><i className="fas fa-car" /> Starters / Alternators <span className="service-price">$225.95 <span>Plus Parts</span></span> </li>
						</ul>
						</div>
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar-area ltn__right-sidebar">
						{/* Menu Widget */}
						<div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
						<ul className="go-top">
							<li><Link to="/service">Property Management <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li className="active"><Link to="/service">Mortgage Service <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/service">Consulting Service <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/service">Home Buying <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/service">Home Selling <span><i className="fas fa-arrow-right" /></span></Link></li>
							<li><Link to="/service">Escrow Services <span><i className="fas fa-arrow-right" /></span></Link></li>
						</ul>
						</div>
						{/* Newsletter Widget */}
						<div className="widget ltn__search-widget ltn__newsletter-widget">                            
						<h6 className="ltn__widget-sub-title">// subscribe</h6>
						<h4 className="ltn__widget-title">Get Newsletter</h4>
						<form action="#">
							<input type="text" name="search" placeholder="Search" />
							<button type="submit"><i className="fas fa-search" /></button>
						</form>
						<div className="ltn__newsletter-bg-icon">
							<i className="fas fa-envelope-open-text" />
						</div>
						</div>
						{/* Banner Widget */}
						<div className="widget ltn__banner-widget go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/banner-1.jpg"} alt="Banner Image" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default ServiceDetails