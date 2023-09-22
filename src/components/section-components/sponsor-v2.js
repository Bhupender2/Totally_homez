import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SponsorV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__brand-logo-area ltn__brand-logo-1 pt-80--- pb-110 plr--9">
				<div className="container-fluid">

				<div className="row ltn__brand-logo-active">

					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/1.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/2.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/3.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/4.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/5.png"} alt="Brand Logo" />
					</div>
					</div>
					<div className="col-lg-12">
					<div className="ltn__brand-logo-item">
						<img src={publicUrl+"assets/img/brand-logo/3.png"} alt="Brand Logo" />
					</div>
					</div>
				</div>
				</div>

			</div>
        }
}

export default SponsorV2