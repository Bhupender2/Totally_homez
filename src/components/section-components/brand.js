import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Brand extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return    <div className="ltn__brand-logo-area ltn__brand-logo-1 bg-image bg-overlay-theme-black-90 pt-290 pb-110 plr--9" data-bs-bg="img/bg/7.jpg">
				<div className="container-fluid">
				<div className="row ltn__brand-logo-active">
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/b1.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/b2.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/b3.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/b4.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/b5.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/b3.png"} alt="Brand Logo" />
					</div>
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default Brand