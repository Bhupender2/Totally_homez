import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const TestimonialV3 = (props) => {
    let customClass = props.customClass ? props.customClass :''
	let publicUrl = process.env.PUBLIC_URL+'/'
	
  return (
	<div>
		<div className={"ltn__testimonial-area ltn__testimonial-4 pt-115 pb-100 plr--9 go-top"+customClass}>
			  <div className="container-fluid">
			    <div className="row">
			      <div className="col-lg-12">
				  
			        <div className="section-title-area ltn__section-title-2--- text-center">
					<center>
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6>
			          <h1 className="section-title">Property Agents</h1>
					  </center>
			        </div>
				
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__testimonial-slider-4 ltn__testimonial-slider-4-active slick-arrow-1">
			          <div className="ltn__testimonial-item-5">
			            <div className="ltn__quote-icon">
			              <i className="far fa-comments" />
			            </div>
			            <div className="ltn__testimonial-image">
			              <img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="quote" />
			            </div>
			            <div className="ltn__testimonial-info">
			              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea commodo.</p>
			              <h4>Jacob William</h4>
			              <h6>Manager</h6>
			            </div>
			          </div>
			          <div className="ltn__testimonial-item-5">
			            <div className="ltn__quote-icon">
			              <i className="far fa-comments" />
			            </div>
			            <div className="ltn__testimonial-image"><img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="quote" /></div>
			            <div className="ltn__testimonial-info">
			              <p>Quidem Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco laboris nisi ut aliquip ex ea. </p>
			              <h4>Ethan James</h4>
			              <h6>Admin</h6>
			            </div>
			          </div>
			          <div className="ltn__testimonial-item-5">
			            <div className="ltn__quote-icon">
			              <i className="far fa-comments" />
			            </div>
			            <div className="ltn__testimonial-image"><img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="quote" /></div>
			            <div className="ltn__testimonial-info">
			              <p>Dolor Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  ullamco nisi ut aliquip ex ea commodo. </p>
			              <h4>Noah Alexander</h4>
			              <h6>Professor</h6>
			            </div>
			          </div>
			          <div className="ltn__testimonial-item-5">
			            <div className="ltn__quote-icon">
			              <i className="far fa-comments" />
			            </div>
			            <div className="ltn__testimonial-image"><img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="quote" /></div>
			            <div className="ltn__testimonial-info">
			              <p>Amet Ipsum Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud  nisi ut aliquip ex ea commodo.</p>
			              <h4>Liam Mason</h4>
			              <h6>Officer</h6>
			            </div>
			          </div>
			        </div>
			        <ul className="ltn__testimonial-quote-menu d-none d-lg-block">
			          <li><img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="Quote image" /></li>
			          <li><img src={publicUrl+"assets/img/testimonial/2.jpg"} alt="Quote image" /></li>
			          <li><img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="Quote image" /></li>
			          <li><img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="Quote image" /></li>
			        </ul>
			      </div>
			    </div>
			  </div>
			</div>
	</div>
  )
}


export default TestimonialV3