import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class BannerV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return  <div className="ltn__slider-area ltn__slider-11  ltn__slider-11-slide-item-count-show--- ltn__slider-11-pagination-count-show--- section-bg-1">
			  <div className="ltn__slider-11-inner">
			    <div className="ltn__slider-11-active">
			      {/* slide-item */}
			      <div className="ltn__slide-item ltn__slide-item-2 ltn__slide-item-3-normal ltn__slide-item-3 ltn__slide-item-11">
			        <div className="ltn__slide-item-inner">
			          <div className="container">
			            <div className="row">
			              <div className="col-lg-12 align-self-center">
			                <div className="slide-item-info">
			                  <div className="slide-item-info-inner ltn__slide-animation">
			                    <div className="slide-video mb-50 d-none">
			                      <a className="ltn__video-icon-2 ltn__video-icon-2-border" href="https://www.youtube.com/embed/tlThdr3O5Qo" data-rel="lightcase:myCollection">
			                        <i className="fa fa-play" />
			                      </a>
			                    </div>
			                  {/*  <h6 className="slide-sub-title white-color--- animated"><span><i className="fas fa-home" /></span> Real Estate Agency</h6>*/}
			                    <h1 className="slide-title animated ">Got Confused? <br /><span>Complete A Quiz</span> & Get The Best Offers</h1>
			                    <div className="slide-brief animated">
			                      <p>Being qualified property experts with years of experience, we realize how confusing Dubai’s off-plan property market could be for new buyers, as well as for professional investors. Especially when there are thousands of off-plan properties in Dubai.</p>
								  <p>You won’t need to look through countless listings on other the UAE's property websites. We have gathered all available information about off-plan property in one place and created a short quiz for you to find your perfect home in less than two minutes.</p>

								  <p>Follow simple steps on the screen to get your personal selection of projects that meet all your requirements. Explore any project in Dubai relevant to you and contact us!</p>
			                    </div>
			                    <div className="btn-wrapper animated">
			                      <Link to="/about" className="theme-btn-1 btn btn-effect-1">Take A Quick Test</Link>
			                      <Link to="/about" className="btn btn-transparent btn-effect-3">It Takes Less Than 2 minutes</Link>
			                   
			                   {/*   <a className="ltn__video-play-btn bg-white" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
			                        <i className="icon-play  ltn__secondary-color" />
			                      </a>*/}
			                    </div>
			                  </div>
			                </div>
			                <div className="slide-item-img">
			                  <img src={publicUrl+"assets/img/slider/61.jpg"} alt="#" />
			                </div>
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

export default BannerV2