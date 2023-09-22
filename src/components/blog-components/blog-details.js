import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';

    let publicUrl = process.env.PUBLIC_URL+'/'
    let imagealt = 'image'


const BlogDetails = () => {
	return (
		<div className="ltn__page-details-area ltn__blog-details-area mb-120 pt-70">
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
					<h2 className="ltn__blog-title">Real estate is property consisting of land and the buildings on it, 
						along with its
					</h2>
					<div className="ltn__blog-meta">
						<ul>
						<li className="ltn__blog-author go-top">
							<Link to="/team-details"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" />By: Ethan</Link>
						</li>
						<li className="ltn__blog-date">
							<i className="far fa-calendar-alt" />June 22, 2020
						</li>
						</ul>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.</p>
					<img src={publicUrl+"assets/img/blog/35.jpg"} alt="Image" />
					<h2>A cleansing hot shower or bath</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
					<hr />
					<h2>Setting the mood with incense</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
					<hr />
					<h2>Setting the mood with incense</h2>
					<div className="list-item-with-icon-2">
						<ul>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						<li>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</li>
						</ul>
					</div>
					<blockquote>
						<h6 className="ltn__secondary-color mt-0">BY HETMAYAR</h6>
						Viral dreamcatcher keytar typewriter, aest hetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.
					</blockquote>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium. </p>
					<img className="alignleft" src={publicUrl+"assets/img/blog/blog-details/1.jpg"} alt="Image" />
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus</p>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
					<h4>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h4>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur expedita velit laboriosam est sint laborum eos assumenda, quam voluptatem adipisci, reprehenderit ut nobis blanditiis perspiciatis!</p>
					<div className="row">
						<div className="col-lg-6">
						<img src={publicUrl+"assets/img/service/31.jpg"} alt="Image" />
						<label>Image Caption Here</label>
						</div>
						<div className="col-lg-6">
						<img src={publicUrl+"assets/img/service/32.jpg"} alt="Image" />
						</div>
					</div>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, amet, fuga omnis eligendi sed cupiditate molestias enim autem animi est tempore ipsa corporis. Recusandae, quia.</p>
					</div>
					{/* blog-tags-social-media */}
				{/*	<div className="ltn__blog-tags-social-media mt-80 row">
					<div className="ltn__tagcloud-widget col-lg-8 go-top">
						<h4>Releted Tags</h4>
						<ul>
						<li>
							<Link to="/shop">Popular</Link>
						</li>
						<li>
							<Link to="/shop">Business</Link>
						</li>
						<li>
							<Link to="/shop">ux</Link>
						</li>
						</ul>
					</div>
					<div className="ltn__social-media text-right text-end col-lg-4">
						<h4>Social Share</h4>
						<ul>
						<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
						<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
						<li><a href="#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
						<li><a href="#" title="Youtube"><i className="fab fa-youtube" /></a></li>
						</ul>
					</div>
					</div>*/}
					<hr />
					{/* prev-next-btn */}
					<div className="ltn__prev-next-btn row mb-50">
					<div className="blog-prev col-lg-6">
						<h6>Prev Post</h6>
						<h3 className="ltn__blog-title"><Link to="#">Tips On Minimalist</Link></h3>
					</div>
					<div className="blog-prev blog-next text-right text-end col-lg-6">
						<h6>Next Post</h6>
						<h3 className="ltn__blog-title"><Link to="#">Less Is More</Link></h3>
					</div>
					</div>
					<hr />
					{/* related-post */}
					{/*<div className="related-post-area mb-50">
					<h4 className="title-2">Related Post</h4>
					<div className="row">
						<div className="col-md-6">
						<div className="ltn__blog-item ltn__blog-item-6">
							<div className="ltn__blog-img">
							<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/blog-details/11.jpg"} alt="Image" /></Link>
							</div>
							<div className="ltn__blog-brief">
							<div className="ltn__blog-meta">
							<ul>
								<li className="ltn__blog-date ltn__secondary-color">
									<i className="far fa-calendar-alt" />June 22, 2020
								</li>
								</ul> 
							</div>
							<h3 className="ltn__blog-title"><Link to="/blog-details">A series of iOS 7 inspire
								vector icons sense.</Link></h3>
							<p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
							</div>
						</div>
						</div>
						<div className="col-md-6">
						
						<div className="ltn__blog-item ltn__blog-item-6">
							<div className="ltn__blog-img">
							<Link to="/blog-details"><img src={publicUrl+"assets/img/blog/blog-details/12.jpg"} alt="Image" /></Link>
							</div>
							<div className="ltn__blog-brief">
							<div className="ltn__blog-meta">
								<ul>
								<li className="ltn__blog-date ltn__secondary-color">
								<i className="far fa-calendar-alt" />June 22, 2020
							</li>
								</ul>
							</div>
							<h3 className="ltn__blog-title"><Link to="/blog-details">A series of iOS 7 inspire
								vector icons sense.</Link></h3>
							<p>Lorem ipsum dolor sit amet, conse ctet ur adipisicing elit, sed doing.</p>
							</div>
						</div>
						</div>
					</div>
					</div>*/}
					{/* <Comments/> */}
				</div>
				</div>
				{/* <Sidebar/> */}
			</div>
			</div>
		</div>
    )
}


   

export default BlogDetails;
