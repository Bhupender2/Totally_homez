import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SearchFormV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__car-dealer-form-area mt--65--- mt-120 mb-120 pb-115---">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="ltn__car-dealer-form-tab">
						<div className="ltn__tab-menu  text-uppercase">
						<div className="nav">
							<a className="active show" data-bs-toggle="tab" href="#ltn__form_tab_1_1"><i className="fas fa-home" />Rent Home</a>
							<a data-bs-toggle="tab" href="#ltn__form_tab_1_2" ><i className="fas fa-home" />Sale Home</a>
						</div>
						</div>
						<div className="tab-content">
						<div className="tab-pane fade active show" id="ltn__form_tab_1_1">
							<div className="car-dealer-form-inner">
							<form action="#" className="ltn__car-dealer-form-box row">
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Property Type</option>
									<option>Apartment</option>
									<option>Co-op</option>
									<option>Condo</option>
									<option>Single Family Home</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Location</option>
									<option>chicago</option>
									<option>London</option>
									<option>Los Angeles</option>
									<option>New York</option>
									<option>New Jersey</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Sub Location</option>
									<option>Bayonne</option>
									<option>Greenville</option>
									<option>Manhattan</option>
									<option>Queens</option>
									<option>The Heights</option>
									<option>Upper East Side</option>
									<option>West Side</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Bedrooms</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">                                                            
								<div className="input-item input-item-name ltn__custom-icon">
									<input type="text" name="name" placeholder="Min size (in sqft)" />
								</div>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">                                                            
								<div className="input-item input-item-name ltn__custom-icon">
									<input type="text" name="name" placeholder="Max size (in sqft)" />
								</div>
								</div> 
								<div className="car-price-filter-range col-lg-12">
								<div className="price_filter">
									<div className="price_slider_amount">
									<input type="submit" defaultValue="Your range:" /> 
									<input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
									</div>
									<div className="slider-range" />
								</div>
								<div className="btn-wrapper text-center">
									{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
									<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</Link>
								</div>
								</div>
							</form>
							</div>
						</div>
						<div className="tab-pane fade" id="ltn__form_tab_1_2">
							<div className="car-dealer-form-inner">
							<form action="#" className="ltn__car-dealer-form-box row">
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Property Type</option>
									<option>Apartment</option>
									<option>Co-op</option>
									<option>Condo</option>
									<option>Single Family Home</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Location</option>
									<option>chicago</option>
									<option>London</option>
									<option>Los Angeles</option>
									<option>New York</option>
									<option>New Jersey</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Sub Location</option>
									<option>Bayonne</option>
									<option>Greenville</option>
									<option>Manhattan</option>
									<option>Queens</option>
									<option>The Heights</option>
									<option>Upper East Side</option>
									<option>West Side</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
								<select className="nice-select">
									<option>Bedrooms</option>
									<option>1</option>
									<option>2</option>
									<option>3</option>
									<option>4</option>
								</select>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">                                                            
								<div className="input-item input-item-name ltn__custom-icon">
									<input type="text" name="name" placeholder="Min size (in sqft)" />
								</div>
								</div> 
								<div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-cog col-lg-4 col-md-6">                                                            
								<div className="input-item input-item-name ltn__custom-icon">
									<input type="text" name="name" placeholder="Max size (in sqft)" />
								</div>
								</div> 
								<div className="car-price-filter-range col-lg-12">
								<div className="price_filter">
									<div className="price_slider_amount">
									<input type="submit" defaultValue="Your range:" /> 
									<input type="text" className="amount" name="price" placeholder="Add Your Price" /> 
									</div>
									<div className="slider-range" />
								</div>
								<div className="btn-wrapper text-center">
									{/* <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</button> */}
									<Link to="/shop-right-sidebar" className="btn theme-btn-1 btn-effect-1 text-uppercase">Search Inventory</Link>
								</div>
								</div>
							</form>
							</div>
						</div>
						</div>
					</div>  
					</div>
				</div>
				</div>
			</div>
  
        }
}

export default SearchFormV2