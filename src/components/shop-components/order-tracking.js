import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class OrderTracking extends Component {
  render() {
   let anchor = '#'
   let imagealt = 'image'
   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
		<div className="ltn__login-area mb-120">
			<div className="container">
				<div className="row">
				<div className="col-lg-8 offset-lg-2">
					<div className="account-login-inner section-bg-1">
					<form method="get" className="ltn__form-box contact-form-box">
						<p className="text-center"> To track your order please enter your Order ID in the box below and press the "Track Order" button. This was given to you on your receipt and in the confirmation email you should have received. </p>
						<label>Order ID</label>
						<input type="text" name="email" placeholder="Found in your order confirmation email." />
						<label>Billing email</label>
						<input type="text" name="email" placeholder="Email you used during checkout." />
						<div className="btn-wrapper mt-0 text-center">
						<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit">Track Order</button>
						</div>
					</form>
					</div>
				</div>
				</div>
			</div>
		</div>
    )
  }
}

export default OrderTracking;
