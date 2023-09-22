import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Social from '../section-components/social';
import Copyright from './copyright';

class Footer_v1 extends Component {

    componentDidMount() {

    	const $ = window.$;
    	
        let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/main.js";

        document.body.appendChild(minscript);

         $('.go-top').find('a').on('click', function () {

			$(".quarter-overlay").fadeIn(1);

				$(window).scrollTop(0);

			setTimeout(function(){
			    	$(".quarter-overlay").fadeOut(300);
				}, 800);

        });


		$(document).on('click','.theme-btn-1 ', function(){ 
            $( 'div' ).removeClass( 'modal-backdrop' );
            $( 'div' ).removeClass( 'show' );
            $( 'div' ).removeClass( 'fade' );
			$('body').attr("style", "");
        });
    }

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = "Footer logo"

        return (
				<footer className="ltn__footer-area  ">
				  <div className="footer-top-area  section-bg-2 plr--5">
				    <div className="container-fluid">
				      <div className="row">
				        <div className="col-xl-4 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-about-widget">
				            <div className="footer-logo">
				              <div className="site-logo">
				                <img src={publicUrl+"assets/img/logo.png"} alt="Logo" />
				              </div>
				            </div>
				            {/* <p>To Get In Touch</p> */}
				            <div className="footer-address">
				              <ul>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-placeholder" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p>Office 103, Building 6 Bay Square Tower, Business Bay, Dubai, United Arab Emirates. PO Box: 418317</p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-call" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="+971 45 54 8620">+971 45 54 8620</a></p>
				                  </div>
				                </li>
				                <li>
				                  <div className="footer-address-icon">
				                    <i className="icon-mail" />
				                  </div>
				                  <div className="footer-address-info">
				                    <p><a href="support@totallyhomerealestate.ae">support@totallyhomerealestate.ae</a></p>
				                  </div>
				                </li>
				              </ul>
				            </div>
				            <div className="ltn__social-media mt-20">
						    	<Social />
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Curations </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/about">Akoya Oxygen</Link></li>
				                <li><Link to="/blog-grid">Al Barari</Link></li>
				                <li><Link to="/shop">Al Satwa</Link></li>
				                <li><Link to="/contact">Al Warqaa</Link></li>
				                <li><Link to="/faq">Culture Village</Link></li>
				                <li><Link to="/contact">Deira</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Navigate </h4>
				            <div className="footer-menu go-top">
				              <ul>
							  <li><Link to="/about-us">About</Link></li>
				                <li><Link to="/team">Team </Link></li>
				                <li><Link to="/blogs">Blogs</Link></li>
				                <li><Link to="/contact">Gallery</Link></li>
				                <li><Link to="/list-with-us"> Sell with us</Link></li>
				                <li><Link to="/career">Careers</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        <div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Community Guides </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Login</Link></li>
				                <li><Link to="/my-account">My account</Link></li>
				                <li><Link to="/wishlist">Wish List</Link></li>
				                <li><Link to="/add-listing">Add listing</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact-us">Contact us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>

						<div className="col-xl-2 col-md-6 col-sm-6 col-12">
				          <div className="footer-widget footer-menu-widget clearfix">
				            <h4 className="footer-title">Explore </h4>
				            <div className="footer-menu go-top">
				              <ul>
				                <li><Link to="/login">Login</Link></li>
				                <li><Link to="/my-account">My account</Link></li>
				                <li><Link to="/wishlist">Wish List</Link></li>
				                <li><Link to="/add-listing">Add listing</Link></li>
				                <li><Link to="/faq">FAQ</Link></li>
				                <li><Link to="/contact-us">Contact us</Link></li>
				              </ul>
				            </div>
				          </div>
				        </div>
				        
				      </div>
				    </div>
				  </div>
				  <Copyright />
				</footer>
        )
    }
}


export default Footer_v1