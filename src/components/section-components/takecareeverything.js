import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TakeCareEverything extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">WE TAKE CARE OF EVERYTHING!   </h6>
			          <h1 className="section-title">Our due diligence is the reason that agents, buyers, and sellers alike have the utmost trust in our services. We are, as such, highly qualified to showcase homes for sale and let you know when an opportunity is present. You decide whether or not you should respond to the offer by then, and the rest is up to us.   </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p className='fixingsizing111'>
						<span className='reddcoloringg'>Property Inspections</span>- Making sure that all houses in your market are fit for living before you list them is our main goal. That's why we have a team that performs infections on various real estate properties before they hit their listing date so that buyers can buy them without any concerns about their quality and sellers get the best price.  </p>
			         
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
				  <div className="ltn__testimonial-item ltn__testimonial-item-7">
					<div className="ltn__testimoni-info">
					  <p className='fixingsizing111'>
					  <span className='reddcoloringg'>Marketing</span>- Every detail of your property gets highlighted through our marketing campaigns. Thanks to a proven formula, we make sure that your home is seen by the maximum number of people and that you get the best price for it.  </p>
					
					</div>
				  </div>
				</div>
				<div className="col-lg-4">
				<div className="ltn__testimonial-item ltn__testimonial-item-7">
				  <div className="ltn__testimoni-info">
					<p className='fixingsizing111'>
					<span className='reddcoloringg'>Negotiating</span> -We are very experienced in negotiations, which can range from dispute resolution to contact preparation for selling. We believe in our clients and can suggest different strategies that might help you get the best possible price for your home. </p>
					
				  </div>
				</div>
			  </div>
			  <div className="col-lg-4">
			  <div className="ltn__testimonial-item ltn__testimonial-item-7">
				<div className="ltn__testimoni-info">
				  <p className='fixingsizing111'>
				  <span className='reddcoloringg'>Buying and Selling</span> - We have a team that takes care of every step of buying a property and selling it for you. The professionals at Totally Home Real Estate do their best to make sure you are getting maximum exposure for your property regardless of how much you are willing to sell it for.  </p>
				  
				</div>
			  </div>
			</div>
		     </div>
			  </div>
			</div>

        }
}

export default TakeCareEverything