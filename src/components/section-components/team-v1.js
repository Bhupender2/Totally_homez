import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class TeamV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__team-area pt-115 pb-90 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6>
						<h1 className="section-title"><span>THE PERKS </span></h1>
					</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Rosalina D. William</Link></h4>
						<h6 className="ltn__secondary-color">Real Estate Broker</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/2.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Kelian Anderson</Link></h4>
						<h6 className="ltn__secondary-color">Selling Agents</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-img">
						<img src={publicUrl+"assets/img/team/5.jpg"} alt="Image" />
						</div>
						<div className="team-info">
						<h4><Link to="/team-details">Miranda H. Halim</Link></h4>
						<h6 className="ltn__secondary-color">Property Seller</h6>
						<div className="ltn__social-media">
							<ul>
							<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
							<li><a href="#"><i className="fab fa-twitter" /></a></li>
							<li><a href="#"><i className="fab fa-linkedin" /></a></li>
							</ul>
						</div>
						</div>
					</div>
					</div>
				</div>
				</div>
			</div>
        }
}

export default TeamV1