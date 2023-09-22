import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const WorkWithUs = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''

	return (
		<div className={customClass}>
			<div className="ltn__about-us-area go-top pt-70">
				<div className="container">
					{
						props?.careerData?.map((career) => (
							<div className="row">
								<div className="col-lg-6 align-self-center">
									<div className="about-us-img-wrap about-img-left">
										<img src={career?.work_img} alt="About Us Image" />
										
									</div>
								</div>
								<div className="col-lg-6 align-self-center">
									<div className="about-us-info-wrap">
										<div className="section-title-area ltn__section-title-2--- mb-20">
											<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Work With Us</h6>
											<h1 className="section-title">{career?.work_h}
												</h1>
											<p>{career?.work_dec} </p>
										</div>


										{/* <div className="btn-wrapper animated">
						<Link to="/service" className="theme-btn-1 btn btn-effect-1">OUR SERVICES</Link>
						</div> */}
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

export default WorkWithUs


