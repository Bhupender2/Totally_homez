import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comments from './comments';
import Sidebar from './sidebar';


const ContactDetails = () => {
  let publicUrl = process.env.PUBLIC_URL+'/'
  let imagealt = 'image'
  return (
    <div>
  

		<div className="ltn__page-details-area ltn__blog-details-area mb-120">
			<div className="container">
			<div className="row">
      <div className="col-lg-6 go-top">
			<aside className="sidebar-area blog-sidebar ltn__right-sidebar">
				{/* Author Widget */}
				<div className="widget ltn__author-widget">
          <br/>
					<img src={publicUrl+"assets/img/blog/666.jpg"} alt="Image" />
         </div>
			

				<div className="widget ltn__social-media-widget">
				<h4 className="ltn__widget-title ltn__widget-title-border-2">Contact with us</h4>
				<div className="ltn__social-media-2">
					<ul>
					<li><a href="#" title="Facebook"><i style={{fontSize:'1.5em'}} className="fab fa-facebook-f" /></a></li>
					<li><a href="#" title="Twitter"><i style={{fontSize:'1.5em'}} className="fab fa-twitter" /></a></li>
					<li><a href="#" title="Linkedin"><i style={{fontSize:'1.5em'}} className="fab fa-linkedin" /></a></li>
					<li><a href="#" title="Instagram"><i style={{fontSize:'1.5em'}} className="fab fa-instagram" /></a></li>
					</ul>
				</div>
				</div>
		
				<div className="widget ltn__banner-widget d-none go-top">
				<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
				</div>
			</aside>
		</div>

				<div className="col-lg-6">
				<div className="ltn__blog-details-wrap">
					<div className="ltn__page-details-inner ltn__blog-details-inner">
				
					<h2 className="ltn__blog-title">Contact Us
					</h2>
					{/* <img src={publicUrl+"assets/img/others/67.png"} width="40px" class="mb-2" alt="Dubai"></img> */}
					{/* <img src={publicUrl+"assets/img/blog/35.jpg"} alt="Image" /> */}
					<h3>Dubai



</h3>
<h6>204, Building 2,
</h6>
<h6>Bay Square,</h6>
<h6>Dubai, PO Box </h6><h6> 125597,
</h6>
<h6>United Arab Emirates</h6>
<h6>ORN: 12328</h6>
					
					{/* <h2>Setting the mood with incense</h2> */}
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. </p>
					{/* <hr /> */}
				
		
						<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit"> Enquire   </button>

				
			
					{/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, amet, fuga omnis eligendi sed cupiditate molestias enim autem animi est tempore ipsa corporis. Recusandae, quia.</p> */}
					</div>
					{/* blog-tags-social-media */}
				
					
					{/* prev-next-btn */}
					
					<hr />
					{/* related-post */}
					
			
				</div>
				</div>
			</div>
			</div>
		</div>
    

    </div>
  )
}

export default ContactDetails