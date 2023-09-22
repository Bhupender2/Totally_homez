import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './sidebar';
import { useDispatch, useSelector } from 'react-redux';
import {  getBlogsApi } from '../../actions/blogActions';


const BlogSlider
	= (props) => {

		const {blogs}=useSelector((state)=>(state.blogs))

		const dispatch = useDispatch()
		useEffect(() => {
			dispatch(getBlogsApi())
		}, [dispatch])

		let publicUrl = process.env.PUBLIC_URL + '/'
		let customClass = props.customClass ? props.customClass : ''
		let sectionClass = props.sectionClass ? props.sectionClass : ''
		return (
			<div className={"ltn__blog-area pt-120  go-top " + sectionClass}>
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<div className="section-title-area ltn__section-title-2--- text-center">
								<h6 className={"section-subtitle ltn__secondary-color " + customClass}>News &amp; Blogs</h6>
								<h1 className="section-title">Latest News Feeds</h1>
							</div>
						</div>
					</div>
					<div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link to="/blog-details"><img src={publicUrl + "assets/img/blog/1.jpg"} alt="#" /></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										{/* <ul>
				  <li className="ltn__blog-author">
					<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
				  </li>
				  <li className="ltn__blog-tags">
					<Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
					<Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
				  </li>
				</ul> */}
									</div>
									<h3 className="ltn__blog-title"><Link to="/blog-details">The Most Inspiring Interior Design Of 2021</Link></h3>
									<div className="ltn__blog-meta-btn">
										{/*<div className="ltn__blog-meta">
											<ul>
												<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
											</ul>
											<ul>
					<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
				  </ul>
										</div>*/}
										<div className="ltn__blog-btn">
											<Link to="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link to="/blog-details"><img src={publicUrl + "assets/img/blog/2.jpg"} alt="#" /></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										{/* <ul>
				  <li className="ltn__blog-author">
					<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
				  </li>
				  <li className="ltn__blog-tags">
					<Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
					<Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
				  </li>
				</ul> */}
									</div>
									<h3 className="ltn__blog-title"><Link to="/blog-details">The Most Inspiring Interior Design Of 2021</Link></h3>
									<div className="ltn__blog-meta-btn">
									{/*	<div className="ltn__blog-meta">
										<ul>
										<li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
									  </ul>
										</div>*/}
										<div className="ltn__blog-btn">
											<Link to="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link to="/blog-details"><img src={publicUrl + "assets/img/blog/3.jpg"} alt="#" /></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										{/* <ul>
				  <li className="ltn__blog-author">
					<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
				  </li>
				  <li className="ltn__blog-tags">
					<Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
					<Link to="/blog-grid"><i className="fas fa-tags" />Estate</Link>
				  </li>
				</ul> */}
									</div>
									<h3 className="ltn__blog-title"><Link to="/blog-details">Recent Commercial Real Estate Transactions</Link></h3>
									<div className="ltn__blog-meta-btn">
										{/*<div className="ltn__blog-meta">
										<ul>
										<li className="ltn__blog-date"><i className="far fa-calendar-alt" />May 22, 2021</li>
									  </ul> 
										</div>*/}
										<div className="ltn__blog-btn">
											<Link to="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link to="/blog-details"><img src={publicUrl + "assets/img/blog/4.jpg"} alt="#" /></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										{/* <ul>
				  <li className="ltn__blog-author">
					<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
				  </li>
				  <li className="ltn__blog-tags">
					<Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
					<Link to="/blog-grid"><i className="fas fa-tags" />Room</Link>
				  </li>
				</ul> */}
									</div>
									<h3 className="ltn__blog-title"><Link to="/blog-details">Renovating a Living Room? Experts Share Their Secrets</Link></h3>
									<div className="ltn__blog-meta-btn">
										{/*<div className="ltn__blog-meta">
										<ul>
										<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
									  </ul> 
										</div>*/}
										<div className="ltn__blog-btn">
											<Link to="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* Blog Item */}
						<div className="col-lg-12">
							<div className="ltn__blog-item ltn__blog-item-3">
								<div className="ltn__blog-img">
									<Link to="/blog-details"><img src={publicUrl + "assets/img/blog/5.jpg"} alt="#" /></Link>
								</div>
								<div className="ltn__blog-brief">
									<div className="ltn__blog-meta">
										{/* <ul>
				  <li className="ltn__blog-author">
					<Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
				  </li>
				  <li className="ltn__blog-tags">
					<Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
					<Link to="/blog-grid"><i className="fas fa-tags" />Trends</Link>
				  </li>
				</ul> */}
									</div>
									<h3 className="ltn__blog-title"><Link to="/blog-details">7 home trends that will shape your house in 2021</Link></h3>
									<div className="ltn__blog-meta-btn">
										{/*<div className="ltn__blog-meta">
										<ul>
										<li className="ltn__blog-date"><i className="far fa-calendar-alt" />June 24, 2021</li>
									  </ul>
										</div>*/}
										<div className="ltn__blog-btn">
											<Link to="/blog-details">Read more</Link>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/*  */}
					</div>
				</div>
			</div>
		)
	}

export default BlogSlider;
