import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NearBy from '../section-components/NearBy';


const NewLOcationV1 = () => {
	let publicUrl = process.env.PUBLIC_URL+'/'

  return (
	<div>
			<div className="ltn__product-area ltn__product-gutter   mb-100 pt-100">
				<div className="container">
				<h4 className="title-2">Location</h4>
							<div className="property-details-google-map mb-60">
								<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9334.271551495209!2d-73.97198251485975!3d40.668170674982946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0456b5a2e7%3A0x68bdf865dda0b669!2sBrooklyn%20Botanic%20Garden%20Shop!5e0!3m2!1sen!2sbd!4v1590597267201!5m2!1sen!2sbd" width="100%" height="100%" frameBorder={0} allowFullScreen aria-hidden="false" tabIndex={0} />
							</div>
				</div>
			</div>
					


			</div>
  )
}


export default NewLOcationV1