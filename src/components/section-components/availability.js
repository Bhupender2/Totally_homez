import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Availability extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="select-availability-area pb-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="section-title-area ltn__section-title-2--- text-center---">
			          <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Avialable Spaces</h6>
			          <h1 className="section-title">Select Availability</h1>
			        </div>
			      </div>
			    </div>
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__select-availability-table-wrap">
			          <div className="ltn__select-availability-table d-none d-md-block">
			            <ul className="ltn__select-availability-table-head">
			              <li>Residence</li>
			              <li>Bedrooms</li>
			              <li>Bathroom</li>
			              <li>SQ.FT </li>
			              <li>Rent Price</li>
			              <li>Details</li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row">
			              <li className="tower-name">Tower Name</li>
			              <li>3</li>
			              <li>3</li>
			              <li>1,200 </li>
			              <li>$3,500</li>
			              <li><a href="product-details.html">+ Available</a></li>
			            </ul>
			          </div>
			          <div className="ltn__select-availability-table-responsive d-md-none">
			            <ul className="ltn__select-availability-table-row-responsive-item">
			              <li><span>Residence</span> <span className="tower-name">Tower Name</span></li>
			              <li><span>Bedrooms</span> <span>3</span></li>
			              <li><span>Bathroom</span> <span>3</span></li>
			              <li><span>SQ.FT</span> <span>1,200</span></li>
			              <li><span>Rent Price</span> <span>$3,500</span></li>
			              <li><span>Details</span> <span><a href="product-details.html">+ Available</a></span></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row-responsive-item">
			              <li><span>Residence</span> <span className="tower-name">Tower Name</span></li>
			              <li><span>Bedrooms</span> <span>3</span></li>
			              <li><span>Bathroom</span> <span>3</span></li>
			              <li><span>SQ.FT</span> <span>1,200</span></li>
			              <li><span>Rent Price</span> <span>$3,500</span></li>
			              <li><span>Details</span> <span><a href="product-details.html">+ Available</a></span></li>
			            </ul>
			            <ul className="ltn__select-availability-table-row-responsive-item">
			              <li><span>Residence</span> <span className="tower-name">Tower Name</span></li>
			              <li><span>Bedrooms</span> <span>3</span></li>
			              <li><span>Bathroom</span> <span>3</span></li>
			              <li><span>SQ.FT</span> <span>1,200</span></li>
			              <li><span>Rent Price</span> <span>$3,500</span></li>
			              <li><span>Details</span> <span><a href="product-details.html">+ Available</a></span></li>
			            </ul>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}

export default Availability