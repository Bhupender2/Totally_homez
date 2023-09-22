import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class OurTeam extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__page-details-area ltn__portfolio-details-area mb-105">
                <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="ltn__page-details-inner ltn__portfolio-details-inner">
                        <div className="ltn__blog-img">
                        </div>
                        <h1 className="section-title"><span>OUR TEAM </span> </h1>
                        <p>What makes Totally Home Real Estate exceptional is our team of passionate and dedicated personnel. </p>
                        <p>Our team is a unique blend of  </p>
                        <h1 className="section-title"> A network of local real estate experts &  </h1>
                        <h1 className="section-title"> A diverse team of international consultants with a big vision.</h1>
                        <p>With such a unique blend, we will be able to bring together the best talent in the industry and provide our clients with exceptional services to help them live their dream home.   </p>
                        <h1 className="section-title"><span>Our Team Members Are </span> </h1>

                        <div className="row">
                        <div className="col-lg-3">
                            <div className="ltn__testimonial-item ltn__testimonial-item-3">
                            <div className="ltn__testimonial-img">
                                <img src={publicUrl+"assets/img/blog/7.jpg"} alt="Image" />
                            </div>
                            <div className="ltn__testimoni-info">
                                <div className="ltn__testimoni-info-inner">
                              
                                <div className="ltn__testimoni-name-designation">
                                    <h4>Hitesh</h4>
                                    <h6>CEO</h6>
                                </div>
                                </div>
                                
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="ltn__testimonial-item ltn__testimonial-item-3">
                            <div className="ltn__testimonial-img">
                                <img src={publicUrl+"assets/img/blog/8.jpg"} alt="Image" />
                            </div>
                            <div className="ltn__testimoni-info">
                            
                                <div className="ltn__testimoni-info-inner">
                               
                                <div className="ltn__testimoni-name-designation">
                                    <h4>Rahul</h4>
                                    <h6>Property Consultant</h6>
                                </div>
                                </div>
                              
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                        <div className="ltn__testimonial-item ltn__testimonial-item-3">
                        <div className="ltn__testimonial-img">
                            <img src={publicUrl+"assets/img/blog/7.jpg"} alt="Image" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <div className="ltn__testimoni-info-inner">
                            
                            <div className="ltn__testimoni-name-designation">
                                <h4>Michael</h4>
                                <h6>Property Consultant</h6>
                            </div>
                            </div>
                           
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="ltn__testimonial-item ltn__testimonial-item-3">
                        <div className="ltn__testimonial-img">
                            <img src={publicUrl+"assets/img/blog/8.jpg"} alt="Image" />
                        </div>
                        <div className="ltn__testimoni-info">
                            <div className="ltn__testimoni-info-inner">
                            <div className="ltn__testimoni-name-designation">
                                <h4>Gaukharay</h4>
                                <h6>Property Consultant</h6>
                            </div>
                            </div>

                        </div>
                        </div>
                    </div>
                        </div>
                      
                        
                    </div>
                    </div>
                   {/* <div className="col-lg-4">
                    <aside className="sidebar-area ltn__right-sidebar">*/}
                        {/* Menu Widget */}
                 {/*       <div className="widget-2 ltn__menu-widget ltn__menu-widget-2 text-uppercase">
                        <ul className="go-top">
                            <li><Link to="/portfolio">Property Management <span><i className="fas fa-arrow-right" /></span></Link></li>
                            <li className="active"><Link to="/portfolio">Mortgage Service <span><i className="fas fa-arrow-right" /></span></Link></li>
                            <li><Link to="/portfolio">Consulting Service <span><i className="fas fa-arrow-right" /></span></Link></li>
                            <li><Link to="/portfolio">Home Buying <span><i className="fas fa-arrow-right" /></span></Link></li>
                            <li><Link to="/portfolio">Home Selling <span><i className="fas fa-arrow-right" /></span></Link></li>
                            <li><Link to="/portfolio">Escrow Services <span><i className="fas fa-arrow-right" /></span></Link></li>
                        </ul>
                        </div>*/}
                        {/* Newsletter Widget */}
                     {/*   <div className="widget ltn__search-widget ltn__newsletter-widget">                            
                        <h6 className="ltn__widget-sub-title">// subscribe</h6>
                        <h4 className="ltn__widget-title">Get Newsletter</h4>
                        <form action="#">
                            <input type="text" name="search" placeholder="Search" />
                            <button type="submit"><i className="fas fa-search" /></button>
                        </form>
                        <div className="ltn__newsletter-bg-icon">
                            <i className="fas fa-envelope-open-text" />
                        </div>
                        </div>*/}
                        {/* Banner Widget */}
                      {/*  <div className="widget ltn__banner-widget go-top">
                        <Link to="/shop"><img src={publicUrl+"assets/img/banner/banner-2.jpg"} alt="Banner Image" /></Link>
                        </div>*/}
                   {/*  </aside>
                    </div> */}
                </div>
                </div>
            </div>
        }
}

export default OurTeam