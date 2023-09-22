import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';

const BlogList = (props) => {
	let customClass = props.customClass ? props.customClass :''
	let publicUrl = process.env.PUBLIC_URL+'/'
  return (
	<div className="ltn__blog-area  mb-120">
			<div className="container">
				<center>
					<h1>A New Architectural Icon by DMCC in
Uptown Dubai</h1>
				</center>
			<div className="row">
				<div className="col-lg-7">
				<div className="ltn__blog-list-wrap">
					{/* Blog Item */}
					<div className="ltn__blog-item ltn__blog-item-5 go-top">
					<div className="ltn__blog-img">
						<Link to="/blog-details"><img src={publicUrl+"assets/img/service/g.png"} alt="Image" /></Link>
					</div>
				
					</div>
					{/* Blog Item (Video) */}
					
					{/* Blog Item (Gallery) */}
					
					{/*  */}
				</div>
				
				</div>


				<div className="col-lg-5">
				<div className="ltn__blog-list">
					{/* Blog Item */}
					<div className="ltn__blog-item ltn__blog-item-5 go-top">
					
					<div className="ltn__blog-brief">
				
						<p>SO/ Uptown Dubai Hotel & Residences will boast a strategic location in Uptown Dubai. The development will be located minutes away from Sheikh Zayed Road, the main highway of Dubai, which means that residents will be able to easily reach other areas of the emirate. Downtown Dubai and Business Bay will be located within a 30-minute drive, while Dubai Marina will be accessible within 10 minutes.</p>
						<p>
Future residents of SO/ Uptown Dubai Hotel & Residences will appreciate The Beach at JBR, The Walk at JBR, a promenade with boutiques and dining options, as well as Ain Dubai. A number of entertainment and leisure facilities, located in close proximity to the tower. Among them are Dubai Marina Mall, Ibn Battuta Mall and Montgomerie Golf Club Dubai.</p>

						<p>Obtaining a residence in SO/ Uptown Dubai Hotel & Residences will provide you with an opportunity to experience a harmonious living in close proximity to Dubai Marina and Palm Jumeirah and enjoy access to endless amenities, located as on the territory of the tower, as in the surrounding areas.</p>


						
					</div>
					</div>
					{/* Blog Item (Video) */}
					
					{/* Blog Item (Gallery) */}
					
					{/*  */}
				</div>
				
				</div>
			</div>
			</div>
		</div>
  )
}


export default BlogList;
