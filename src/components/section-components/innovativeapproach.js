import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class InnovativeApproach extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__testimonial-area section-bg-1--- bg-image-top pt-115 pb-70" data-bs-bg={publicUrl+"assets/img/bg/20.jpg"}>
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center">
			          <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">AN INNOVATIVE APPROACH  </h6>
			          <h1 className="section-title">Our diversified marketing approach helps you reach buyers everywhere. Your property stands out in a sea of others, as our innovative approach helps it:  </h1>
			        </div>
			      </div>
			    </div>
			    <div className="row ltn__testimonial-slider-5-active slick-arrow-1">
			      <div className="col-lg-4">
			        <div className="ltn__testimonial-item ltn__testimonial-item-7">
			          <div className="ltn__testimoni-info">
			            <p className='fixingsizing'>
						<span className='reddcoloringg'>Gain visibility</span>-  It is true that the real estate market is experiencing a huge and unprecedented number of home listings. However, this does not mean that any home will get noticed. Fully optimized for search engines, your property listing will be found by potential buyers who will then be directed to your property folder for more information about the home. From there, you can use our expertise to create an effective marketing campaign to reach them. </p>
			         
			          </div>
			        </div>
			      </div>
				  <div className="col-lg-4">
				  <div className="ltn__testimonial-item ltn__testimonial-item-7">
					<div className="ltn__testimoni-info">
					  <p className='fixingsizing'>
					  <span className='reddcoloringg'>Reach your ideal buyer</span>- You can easily reach buyers who are most likely to purchase your home with the help of our website's powerful search tools. </p>
					
					</div>
				  </div>
				</div>
				<div className="col-lg-4">
				<div className="ltn__testimonial-item ltn__testimonial-item-7">
				  <div className="ltn__testimoni-info">
					<p className='fixingsizing'>
					<span className='reddcoloringg'>Get worthwhile offers</span> -Did you know that buyers are likely to place high-value offers on your home if they know more information about it? This is why we take a lot of pride in our search engine optimization and make sure that your listing will be found whenever possible. </p>
					
				  </div>
				</div>
			  </div>
			  <div className="col-lg-4">
			  <div className="ltn__testimonial-item ltn__testimonial-item-7">
				<div className="ltn__testimoni-info">
				  <p className='fixingsizing'>
				  <span className='reddcoloringg'>Increase the price of your property</span> - We can get you up to twice the price of your property by using our expertise and making sure that only buyers who are serious about purchasing your property will see it. By strategically targeting prospective buyers and increasing the number of inquiries, you are likely to receive a higher sale price for your home. </p>
				  
				</div>
			  </div>
			</div>
		     </div>
			  </div>
			</div>

        }
}

export default InnovativeApproach