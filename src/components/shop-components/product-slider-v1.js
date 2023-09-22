import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
let publicUrl = process.env.PUBLIC_URL + '/'



const ProductSliderV1 = ({propertyDetails}) => {
	return (
		<div className="ltn__img-slider-area">
			<div className="container-fluid">
				<div className="row ltn__image-slider-5-active slick-arrow-1 slick-arrow-1-inner ltn__no-gutter-all">
					{
						
					}
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/31.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/31.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/32.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/32.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/33.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/33.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/34.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/34.jpg"} alt="Image" />
							</a>
						</div>
					</div>
					<div className="col-lg-12">
						<div className="ltn__img-slide-item-4">
							<a href={publicUrl + "assets/img/img-slide/35.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl + "assets/img/img-slide/35.jpg"} alt="Image" />
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>)
}

export default ProductSliderV1



