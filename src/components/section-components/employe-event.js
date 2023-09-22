import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const EmployeeEvent = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''

	return (
		<div className={customClass}>
			<div className="ltn__about-us-area  go-top  pt-100 mb-40">
				<div className="container">
					{
						props?.careerData?.map((item, index) => (
							<div className="row">
								<div className="col-lg-5 align-self-center">
									<div className="about-us-img-wrap ltn__img-shape-left  about-img-left">
										<img src={item?.sec9_img} alt="Image" />
									</div>
								</div>
								<div className="col-lg-7 align-self-center">
									<div className="about-us-info-wrap">
										<div className="section-title-area ltn__section-title-2--- mb-20">

											<h1 className="section-title"><span>{item?.sec9_h} </span></h1>
										</div>
										<div className="about-us-info-wrap-inner about-us-info-devide---">
											<p>{item?.sec9_dsc}  </p>
											
										</div>

									</div>
								</div>
							</div>
						))
					}

				</div>
			</div>
		</div>
	)
}










export default EmployeeEvent