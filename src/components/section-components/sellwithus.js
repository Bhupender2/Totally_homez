import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';




const SellWithUs = (props) => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''

	return (
		<div className={customClass}>
			<div className="ltn__about-us-area go-top pt-70">
				<div className="container">
					{
						props?.listWithUs?.map((item, index) => (
							<div className="row">
								<div className="col-lg-6 align-self-center">
									<div className="about-us-img-wrap about-img-left">
										<img src={item?.sec1_img} alt="About Us Image" />
										<div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
											
										</div>
									</div>
								</div>
								<div className="col-lg-6 align-self-center">
									<div className="about-us-info-wrap">
										<div className="section-title-area ltn__section-title-2--- mb-20">
											<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">SELL WITH US </h6>
											<h1 className="section-title">{item?.sec1_h} </h1>
											<p>{item?.sec1_dsc}  </p>
											
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

export default SellWithUs


