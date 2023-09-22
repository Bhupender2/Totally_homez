import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';

class TopBar extends Component {
	
    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        return (
		<div>
          <div className="ltn__header-top-area section-bg-6">
			<div className="container">
				<div className="row">
				<div className="col-md-7">
					<div className="ltn__top-bar-menu">
					<ul>
						<li><a href="mailto:info@webmail.com?Subject=Flower%20greetings%20to%20you"><i className="icon-mail" /> info@webmail.com</a></li>
						<li><a href="locations.html"><i className="icon-placeholder" /> 15/A, Nest Tower, NYC</a></li>
					</ul>
					</div>
				</div>
				<div className="col-md-5">
					<div className="top-bar-right text-end">
					<div className="ltn__top-bar-menu">
						<ul>
						<li>
							{/* ltn__language-menu */}
							<div className="ltn__drop-menu ltn__currency-menu ltn__language-menu">
							<ul>
								<li><a href="#" className="dropdown-toggle"><span className="active-currency">English</span></a>
								<ul>
									<li><a href="#">Arabic</a></li>
									<li><a href="#">Bengali</a></li>
									<li><a href="#">Chinese</a></li>
									<li><a href="#">English</a></li>
									<li><a href="#">French</a></li>
									<li><a href="#">Hindi</a></li>
								</ul>
								</li>
							</ul>
							</div>
						</li>
						<li>
							{/* ltn__social-media */}
							<div className="ltn__social-media">
							<ul>
								<li><a href="#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
								<li><a href="#" title="Twitter"><i className="fab fa-twitter" /></a></li>
								<li><a href="#" title="Instagram"><i className="fab fa-instagram" /></a></li>
								<li><a href="#" title="Dribbble"><i className="fab fa-dribbble" /></a></li>
							</ul>
							</div>
						</li>
						</ul>
					</div>
					</div>
				</div>
				</div>
			</div>
			</div>
		</div>
        )
    }
}


export default TopBar