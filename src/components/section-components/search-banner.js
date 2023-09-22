import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class SearchBarV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="ltn__slider-area ltn__slider-4 pt-100 ">
    <div className="container">
    <div className="row">
    <div className="col-lg-12 align-self-center">
        <div className="slide-item-car-dealer-form">
        <div className="ltn__car-dealer-form-tab">
            <center>
            <div className="tab-content tab-content1111">
            <div className="tab-pane  minheight fade container-fluid active show" id="ltn__form_tab_1_1">
                <div className="car-dealer-form-inner">
                <form action="#" className="ltn__car-dealer-form-box row">
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter  col-lg-4 col-md-6">
                    
                    <select className="nice-select">
                    <option>Community</option>
                        <option>chicago</option>
                        <option>London</option>
                        <option>Los Angeles</option>
                        <option>New York</option>
                        <option>New Jersey</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
                
                    <select className="nice-select">
                        
                        <option>Sub Community</option>
                        <option>Bayonne</option>
                        <option>Greenville</option>
                        <option>Manhattan</option>
                        <option>Queens</option>
                        <option>The Heights</option>
                        <option>Upper East Side</option>
                        <option>West Side</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                
                    <select className="nice-select">
                        
                        <option>Property Type</option>
                        <option>Apartment</option>
                        <option>Co-op</option>
                        <option>Condo</option>
                        <option>Single Family Home</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                
                    <select className="nice-select">
                        <option>0-500,000</option>
                        <option>500,000-1,000,000</option>
                        <option>1,000,000-5,000,000</option>
                        <option>5,000,000-10,000,000</option>
                        <option>Above 10,000,000</option>

                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-pin col-lg-4 col-md-6">
                    
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
                    <button className="btn theme-btn-1 btn-effect-1 " type="submit">Search</button>
                    </div>
                    </div> 
        
                    
                </form>
                </div>
            </div>
            <div className="tab-pane fade container-fluid" id="ltn__form_tab_1_2">
                <div className="car-dealer-form-inner">
                <form action="#" className="ltn__car-dealer-form-box row">
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter  col-lg-4 col-md-6">
                    
                    <select className="nice-select">
                    <option>Community</option>
                        <option>chicago</option>
                        <option>London</option>
                        <option>Los Angeles</option>
                        <option>New York</option>
                        <option>New Jersey</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
            
                    <select className="nice-select">
                        
                        <option>Sub Community</option>
                        <option>Bayonne</option>
                        <option>Greenville</option>
                        <option>Manhattan</option>
                        <option>Queens</option>
                        <option>The Heights</option>
                        <option>Upper East Side</option>
                        <option>West Side</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-car col-lg-4 col-md-6">
                
                    <select className="nice-select">
                        
                        <option>Property Type</option>
                        <option>Apartment</option>
                        <option>Co-op</option>
                        <option>Condo</option>
                        <option>Single Family Home</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                    
                    <select className="nice-select">
                        <option>0-500,000</option>
                        <option>500,000-1,000,000</option>
                        <option>1,000,000-5,000,000</option>
                        <option>5,000,000-10,000,000</option>
                        <option>Above 10,000,000</option>

                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-pin col-lg-4 col-md-6">
                
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
                    <button className="btn theme-btn-1 btn-effect-1 " type="submit">Search</button>
                    </div>
                    </div> 
                    
                    
                </form>
                </div>
            </div>
            <div className="tab-pane fade container-fluid" id="ltn__form_tab_1_3">
                <div className="car-dealer-form-inner">
                <form action="#" className="ltn__car-dealer-form-box row">
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-meter  col-lg-4 col-md-6">
                
                    <select className="nice-select">
                    <option>Community</option>
                        <option>chicago</option>
                        <option>London</option>
                        <option>Los Angeles</option>
                        <option>New York</option>
                        <option>New Jersey</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-4 col-md-6">
            
                    <select className="nice-select">
                        
                        <option>Sub Community</option>
                        <option>Bayonne</option>
                        <option>Greenville</option>
                        <option>Manhattan</option>
                        <option>Queens</option>
                        <option>The Heights</option>
                        <option>Upper East Side</option>
                        <option>West Side</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon fas fa-home ltn__icon-car col-lg-4 col-md-6">
                
                
                    <select className="nice-select">
                        
                        <option>Property Type</option>
                        <option>Apartment</option>
                        <option>Co-op</option>
                        <option>Condo</option>
                        <option>Single Family Home</option>
                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-ring col-lg-4 col-md-6">
                
                    <select className="nice-select">
                        <option>0-500,000</option>
                        <option>500,000-1,000,000</option>
                        <option>1,000,000-5,000,000</option>
                        <option>5,000,000-10,000,000</option>
                        <option>Above 10,000,000</option>

                    </select>
                    </div> 
                    <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-pin col-lg-4 col-md-6">
                
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
                    <button className="btn theme-btn-1 btn-effect-1 " type="submit">Search</button>
                    </div>
                    </div> 
                    
                    
                    
                </form>
                </div>
            </div>
            </div>
            </center>
            
        </div>                                        
        </div>
    </div>
    </div>
</div>
			</div>
        }
}

export default SearchBarV1