import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class BlogGrid extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'
    return (
		<div className="ltn__blog-area ltn__blog-item-3-normal pt-150 mb-100 go-top">
			<div className="container">
			<div className="row">
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">Common Engine Oil Problems and Solutions</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">How and when to replace brake rotors</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/3.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">Electric Car Maintenance, Servicing &amp; Repairs</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />August 22, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/4.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">How to Prepare for your First Track Day!</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/5.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">How to: Make Your Tires Last Longer</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/6.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">Common Engine Oil Problems and Solutions</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/7.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">How and when to replace brake rotors</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/8.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">Electric Car Maintenance, Servicing &amp; Repairs</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />August 22, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/* Blog Item */}
				<div className="col-lg-4 col-sm-6 col-12">
				<div className="ltn__blog-item ltn__blog-item-3">
					<div className="ltn__blog-img">
					<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
					</div>
					<div className="ltn__blog-brief">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
						</li>
						<li className="ltn__blog-tags go-top">
						</li>
						</ul>
					</div>
					<h3 className="ltn__blog-title"><Link to="/blog-details">How to: Make Your Tires Last Longer</Link></h3>
					<div className="ltn__blog-meta-btn">
						<div className="ltn__blog-meta">
						<ul>
							<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2020</li>
						</ul>
						</div>
						<div className="ltn__blog-btn">
						<Link to="/blog-details">Read more</Link>
						</div>
					</div>
					</div>
				</div>
				</div>
				{/*  */}
			</div>
			{/* <div className="row">
				<div className="col-lg-12">
				<div className="ltn__pagination-area text-center">
					<div className="ltn__pagination">
					<ul>
						<li><Link to="#"><i className="fas fa-angle-double-left" /></Link></li>
						<li><Link to="#">1</Link></li>
						<li className="active"><Link to="#">2</Link></li>
						<li><Link to="#">3</Link></li>
						<li><Link to="#">...</Link></li>
						<li><Link to="#">10</Link></li>
						<li><Link to="#"><i className="fas fa-angle-double-right" /></Link></li>
					</ul>
					</div>
				</div>
				</div>
			</div> */}
			</div>
		</div>
	  
    )
  }
}

export default BlogGrid;
