import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ApartmentV1 from './apartment-v1';

class VideoV2 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div className="ltn__about-us-area section-bg-1 bg-image-right-before pt-120">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-info-wrap">
			          <div className="section-title-area ltn__section-title-2--- mb-20">
			            <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">Best Apartments In Dubai</h6>
			            <h1 className="section-title">Live in style and comfort with our spacious</h1>
			            <p>Over 39,000 people work for us in more than 70 countries all over the
			              This breadth of global coverage, combined with specialist services</p>
			          </div>
			         {/* { <ul className="ltn__list-item-half ltn__list-item-half-2 list-item-margin clearfix">
			            <li>
			              <i className="icon-done" />
			              Living rooms are pre-wired for Surround
			            </li>
			            <li>
			              <i className="icon-done" />
			              Luxurious interior design and amenities
			            </li>
			            <li>
			              <i className="icon-done" />
			              Nestled in the Buckhead Vinings communities
			            </li>
			            <li>
			              <i className="icon-done" />
			              Private balconies with stunning views
			            </li>
			            <li>
			              <i className="icon-done" />
			              A rare combination of inspired architecture
			            </li>
			            <li>
			              <i className="icon-done" />
			              Outdoor grilling with dining court
			            </li>
			          </ul>} */}
			          <div className="  ltn__animation-pulse2 text-center mt-30">
			            <a className="ltn__video-play-btn bg-white--- ltn__secondary-bg" href="https://www.youtube.com/embed/HnbMYzdjuBs?autoplay=1&showinfo=0" data-rel="lightcase">
			              <i className="icon-play  ltn__secondary-color--- white-color" />
			            </a>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-6 align-self-center">
			        <div className="about-us-img-wrap about-img-left">
			        </div>
			      </div>

			    </div>
			  </div>

			</div>
        }
}

export default VideoV2