import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { getCarouselDetailsApi } from '../../actions/crouselActions';

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'


const CarouselDetailsCard = ({carouselDetails}) => {
   
	return (
		<div className="ltn__page-details-area ltn__blog-details-area mb-120">
			<div className="container">
			<div className="row">
				<div className="col-lg-12">
				<div className="ltn__blog-details-wrap">
					<div className="ltn__page-details-inner ltn__blog-details-inner">
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-category">
							{/* <Link to="/shop">Real Estate</Link> */}
						</li>
						</ul>
					</div>
					<h2 className="ltn__blog-title">{carouselDetails?.name}
					</h2>
				
					<p>{carouselDetails?.description}</p>
					<img src={publicUrl+"assets/img/blog/35.jpg"} alt="Image" />
					
				
			
					</div>
					{/* blog-tags-social-media */}
				
					{/* <Comments/> */}
				</div>
				</div>
				{/* <Sidebar/> */}
			</div>
			</div>
		</div>
    )
}


   

export default CarouselDetailsCard;
