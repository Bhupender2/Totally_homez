import React from 'react'
import { Link } from 'react-router-dom';

const BlogT = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''


  return (
    <div className={customClass}>
        <div className="ltn__blog-area ltn__blog-item-3-normal mb-100 go-top">
			<div className="container">
			<div className="row">
				{/* Blog Item */}
                <div className="section-title-area ltn__section-title-2--- text-center">
		          <h6 className={"section-subtitle ltn__secondary-color "+customClass}>News &amp; Blogs</h6>
		          <h1 className="section-title">Latest News Feeds</h1>
		        </div>
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
							<Link to="/service"><i className="fas fa-tags" />Services</Link>
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
							<Link to="/service"><i className="fas fa-tags" />Services</Link>
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
							<Link to="/service"><i className="fas fa-tags" />Services</Link>
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

			</div>
		
			</div>
		</div>
    </div>
  )
}

export default BlogT