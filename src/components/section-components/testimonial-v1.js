import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">WHAT MAKES US A GREAT WORKPLACE? </h6>
			          <h1 className="section-title">We support our employees by not only compensating them lucratively for the work they do, but by constantly having their backs and bolstering their daily working lives through: </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p>
						<span className='reddcoloringg'>Exceptional Marketing Support</span>- Our marketing support is supplied by one of the best of its kind in Dubai. We make use of various digital avenues such as social media, mobile apps, websites and newspapers to reach out to our clients. </p>
			         
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
				  <div className="ltn__testimonial-item ltn__testimonial-item-7">
					<div className="ltn__testimoni-info">
					  <p>
					  <span className='reddcoloringg'>Social Media Advertising</span>- Real estate agents use social media platforms such as Facebook and Instagram to reach potential clients and promote properties online. </p>
					
					</div>
				  </div>
				</div>
				<div className="col-lg-4">
				<div className="ltn__testimonial-item ltn__testimonial-item-7">
				  <div className="ltn__testimoni-info">
					<p>
					<span className='reddcoloringg'>Augmented Reality (AR) Technology:</span>-AR technology allows our agents to superimpose digital images onto physical objects or environments, giving clients a more immersive experience when viewing properties </p>
					
				  </div>
				</div>
			  </div>
			  <div className="col-lg-4">
			  <div className="ltn__testimonial-item ltn__testimonial-item-7">
				<div className="ltn__testimoni-info">
				  <p>
				  <span className='reddcoloringg'>Video Marketing</span>- Totally Home real estate agents use video marketing to create engaging content and showcase their properties in a more dynamic way. </p>
				  
				</div>
			  </div>
			</div>
			<div className="col-lg-4">
			<div className="ltn__testimonial-item ltn__testimonial-item-7">
			  <div className="ltn__testimoni-info">
				<p>
				<span className='reddcoloringg'>Collaboration Tools</span>- Collaboration tools like Google's suite and Asana help agents to organize and track their sales funnel, monitor leads and close deals </p>
			  </div>
			</div>
		  </div>
		  <div className="col-lg-4">
		  <div className="ltn__testimonial-item ltn__testimonial-item-7">
			<div className="ltn__testimoni-info">
			  <p>
			  <span className='reddcoloringg'>Customer Relationship Management (CRM) Software</span>- We provide you with the opportunity to learn real estate by doing - participating in various learning activities, workshops and training sessions. This will give you exposure to various aspects of real estate and make you better equipped for your future career as a realtor.  </p>
			 
			</div>
		  </div>
		</div>
			     
			   
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial