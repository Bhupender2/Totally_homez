import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Loader from '../Loader/Loader';
import { TEAM_API_URL } from '../../constants/config';





const TeamDetails = ({loading,teamDetails}) => {
    let publicUrl = process.env.PUBLIC_URL+'/'

	if(loading){
		return (
			<Loader/>
		)
	}
  return (
	<div className="ltn__team-details-area mt-100 mb-120">
	<div className="container">
	<div className="row">
		<div className="col-lg-3">
		<div className="ltn__team-details-member-info text-center mb-40">
			<div className="team-details-img">
			<img src={`${TEAM_API_URL}/${teamDetails?.path}`} alt="Team Member Image" />
			</div>
		<center>	<h2>{teamDetails?.name}</h2>
		<h6 className="text-uppercase ltn__secondary-color">{teamDetails?.designation}</h6></center>
		
		</div>
		</div>
		<div className="col-lg-8">
		<div className="ltn__team-details-member-info-details">
			<div className="row">
			<div className="col-lg-6">
				<div className="ltn__team-details-member-about">
				<ul>
					<li><strong>Positions:</strong> Senior Property Seller</li>
					<li><strong>Email:</strong> {teamDetails?.email}</li>
											{/* <li><strong>Fax:</strong> +0123-456 789</li> */}
											<li><strong>Phone:</strong> {teamDetails?.mobile_no}</li>

											<li><strong>Whatsapp:</strong> {teamDetails?.whatsapp}</li>
											<li> {teamDetails?.description}</li>


				</ul>
				</div>
			</div>
			
			</div>
			<hr />
			
			<div className="row ltn__custom-gutter mt-50 mb-20"></div>
			<div className="ltn__form-box contact-form-box box-shadow white-bg mt-50">
			<h4 className="title-2">Contact for any Inquiry</h4>
			<form id="contact-form" action="mail.php" method="post">
				<div className="row">
				<div className="col-md-6">
					<div className="input-item input-item-name ltn__custom-icon">
					<input type="text" name="name" placeholder="Enter your name" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-item input-item-email ltn__custom-icon">
					<input type="email" name="email" placeholder="Enter email address" />
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-item">
					<select className="nice-select">
						<option>Select Service Type</option>
						<option>Property Management </option>
						<option>Mortgage Service </option>
						<option>Consulting Service</option>
						<option>Home Buying</option>
						<option>Home Selling</option>
						<option>Escrow Services</option>
					</select>
					</div>
				</div>
				<div className="col-md-6">
					<div className="input-item input-item-phone ltn__custom-icon">
					<input type="text" name="phone" placeholder="Enter phone number" />
					</div>
				</div>
				</div>
				<div className="input-item input-item-textarea ltn__custom-icon">
				<textarea name="message" placeholder="Enter message" defaultValue={""} />
				</div>
				<p><label className="input-info-save mb-0"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label></p>
				<div className="btn-wrapper mt-0">
				<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">get an free service</button>
				</div>
				<p className="form-messege mb-0 mt-20" />
			</form>
			</div>
		</div>
		</div>
	</div>
	</div>
</div>
  )
}


export default TeamDetails