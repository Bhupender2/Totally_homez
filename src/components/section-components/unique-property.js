import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const UniqueProperty = ({listWithUs}) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
let imagealt = 'image'
  return (
	<div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1 mt-100">
	<div className="ltn__slider-11-inner">
	  <div className="ltn__slider-11-active">
		{/* slide-item */}
		<div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
		  <div className="ltn__slide-item-inner">
			<div className="container">
			 {
				listWithUs?.map((item,index)=>(
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
						  <h1 className="slide-title animated "> <br /><span>{item?.sec4_h}  </span></h1>
						  <div className="slide-brief animated">
							<p>{item?.sec4_dsc} </p>
	
						  </div>
						</div>
					  </div>
					  <div className="slide-item-img">
						<img src={item?.sec4_img} alt="#" />
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

export default UniqueProperty