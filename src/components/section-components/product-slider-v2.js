import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const ProductSliderV2 = (props) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
		let customClass = props.customClass ? props.customClass :''
  return (
	<div className={"ltn__about-us-area"+customClass}>
    <div className="container">
      <div className="row">
        <div className="col-lg-6 align-self-center">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-30">
              {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
              <h1 className="section-title">Best Penthousesssssss ss In Dubai </h1>
              <p>the best off-plan projects in Dubai offer a comssbination of attractive payment plans, high-quality amenities, prime locations, investment opportunities, innovative design, reliable developers, and easy access to transportation.</p>
                            <p>the best off-plan projects in Dubai offer a combination of attractive payment plans, high-quality amenities, prime locations, investment opportunities, innovative design, reliable developers, and easy access to transportation.</p>

            </div>
            {/* <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
              <li>High-quality amenities</li>
              <li>Investment opportunities</li>
              <li>Easy access to transportation</li>
            </ul> */}
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
              <li><span>3 <i className="flaticon-bed" /></span>
                Bedrooms
              </li>
              <li><span>2 <i className="flaticon-clean" /></span>
                Bathrooms
              </li>
              <li><span>2 <i className="flaticon-car" /></span>
                Car parking
              </li>
              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
                square Ft
              </li>
            </ul> */}
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before--- ltn__list-item-2-img mb-50">
              <li>
                <a href={publicUrl+"assets/img/img-slide/11.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/11.jpg"} alt="Image" />
                </a>
              </li>
              <li>
                <a href={publicUrl+"assets/img/img-slide/12.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/12.jpg"} alt="Image" />
                </a>
              </li>
              <li>
                <a href={publicUrl+"assets/img/img-slide/13.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/13.jpg"} alt="Image" />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="about-us-img-wrap about-img-right">
            <img src="https://pic.le-cdn.com/thumbs/520x390/480/1/properties/Property-6609991517d604e29875bd9576182487-121125645.jpg" alt="About Us Image" />
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default ProductSliderV2