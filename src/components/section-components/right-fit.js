import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const RightFit = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'

    let customClass = props.customClass ? props.customClass :''
  return (
	<div><div className={ customClass } >
		{
			props?.careerData?.map((item,index)=>(

				<div className="container">
		
	  <div className="row">
		<div className="col-lg-12">
		  <div className="section-title-area ltn__section-title-2--- text-center">
			<h1 className="section-title"><span>{item?.sec3_h}</span></h1>
		  </div>
		</div>
	  </div>
	  <div className="row ltn__custom-gutter--- justify-content-center go-top">
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
			<div className="ltn__feature-info">
			 < Link  className="ltn__service-btn" >{item?.sec3_b1_dec}</Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1 active">
		
			<div className="ltn__feature-info">
			< Link  className="ltn__service-btn" >{item?.sec3_b2_dec}</Link>
			</div>
		  </div>
		</div>
		<div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			< Link  className="ltn__service-btn" >{item?.sec3_b3_dec}</Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			< Link  className="ltn__service-btn" >{item?.sec3_b4_dec}</Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			< Link  className="ltn__service-btn" >{item?.sec3_b5_dec}</Link>
			</div>
		  </div>
		</div>
        <div className="col-lg-4 col-sm-6 col-12">
		  <div className="ltn__feature-item ltn__feature-item-6 text-center bg-white  box-shadow-1">
		
			<div className="ltn__feature-info">
			< Link  className="ltn__service-btn" >{item?.sec3_b6_dec}</Link>
			</div>
		  </div>
		</div>
        
	  </div>
	</div>
			))
		}
	
  </div></div>
  )
}



export default RightFit