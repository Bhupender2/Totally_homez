import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ReadyToSell extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__call-to-action-area call-to-action-6 before-bg-bottom " >
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="call-to-action-inner call-to-action-inner-6 ltn__secondary-bg position-relative text-center---">
			          <div className="coll-to-info text-color-white">
			            <h1>Ready to sell? </h1>
			            <p>Contact us now and get your property listed today! We are ready to serve you and help you achieve your goals. </p>
			          </div>
			          <div className="btn-wrapper go-top">
			            <Link className="btn btn-effect-5 theme-btn-1" to="/contact">Get A Consultancy <i className="icon-next" /></Link>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default ReadyToSell