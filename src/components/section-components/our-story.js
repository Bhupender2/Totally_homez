import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { ABOUT_IMAGE_URL } from '../../constants/config';
let publicUrl = process.env.PUBLIC_URL+'/'
let imagealt = 'image'


const OurStory = (props) => {
  return (
	<div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1 mt-100">
	<div className="ltn__slider-11-inner">
	  <div className="ltn__slider-11-active">
		{/* slide-item */}
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
				{
					props?.aboutUsData?.map((about)=>(
						<div className="row">
						<div className="col-lg-12 align-self-center">
						  <div className="slide-item-info">
							<div className="slide-item-info-inner ltn__slide-animation">
							  <div className="slide-video mb-50 d-none">
								<a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
								  <i className="fa fa-play" />
								</a>
							  </div>
							{/*  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>*/}
							  <h1 className="slide-title animated "> <br /><span>OUR STORY</span></h1>
							  <div className="slide-brief animated">
								<p>{about?.story_dsc} </p>
								{/* <p>Founded in 2021, Totally Home Real Estate has rapidly become one of the best real estate companies. Leading Property investment advisory.In the UAE. We are dedicated to providing the highest level of service possible with an eye for customer satisfaction, which is why we have grown to become one of the most trusted names in real estate and property investment advisory services. Our expertise spans across commercial and residential sales, investment and its management and leasing advisory services. </p> */}
		
								{/* <p>Through our company, our clients will be able to discover Dubai from a local perspective; our agents as well will be able to provide our international clients with a view of this magnificent city through different lenses. </p> */}
							  </div>
							</div>
						  </div>
						  <div className="slide-item-img">
							<img src={`${ABOUT_IMAGE_URL}/${about?.story_img}`} alt="#" />
						  </div>
						</div>
					  </div>
					))
				}
			
			</div>
		  </div>
		</div>
	  
	  
	  </div>
	 
	</div>
  </div>
  )
}

export default OurStory

