import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const TeamCarousel = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ?props.customClass :''
    let sectionClass =props.sectionClass ?props.sectionClass :''
  return (
    <div className={ "lltn__team-area pt-100  go-top "+ sectionClass}>
    <div className="container">
      <div className="row">

        <div className="col-lg-12">
        </div>

      </div>
      <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
        {/* Blog Item */}
        <div className="col-lg-12">
          <div className="ltn__blog-item ltn__blog-item-3">
            <div className="ltn__blog-img">
              <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/1.jpg"} alt="#" /></Link>
            </div>
      
          </div>
        </div>
        {/* Blog Item */}
        <div className="col-lg-12">
          <div className="ltn__blog-item ltn__blog-item-3">
            <div className="ltn__blog-img">
              <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/2.jpg"} alt="#" /></Link>
            </div>
           {/* <div className="ltn__blog-brief">
              <div className="ltn__blog-meta">
              <ul>
                   <li className="ltn__blog-author">
                     <Link to="/team-details"><i className="far fa-user" />by: Admin</Link>
                 </li>
                 <li className="ltn__blog-tags">
                     <Link to="/blog-grid"><i className="fas fa-tags" />Interior</Link>
                   </li>
                 </ul>
              </div>
              <h3 className="ltn__blog-title"><Link to="/blog-details">The Most Inspiring Interior Design Of 2021</Link></h3>
              <div className="ltn__blog-meta-btn">
                <div className="ltn__blog-meta">
                <ul>
                <li className="ltn__blog-date"><i className="far fa-calendar-alt" />July 23, 2021</li>
              </ul>
                </div>
                <div className="ltn__blog-btn">
                  <Link to="/blog-details">Read more</Link>
                </div>
              </div>
            </div>*/}
          </div>
        </div>
        {/* Blog Item */}
        <div className="col-lg-12">
          <div className="ltn__blog-item ltn__blog-item-3">
            <div className="ltn__blog-img">
              <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/3.jpg"} alt="#" /></Link>
            </div>
           
          </div>
        </div>
        {/* Blog Item */}
        <div className="col-lg-12">
          <div className="ltn__blog-item ltn__blog-item-3">
            <div className="ltn__blog-img">
              <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/4.jpg"} alt="#" /></Link>
            </div>
           
          </div>
        </div>
        {/* Blog Item */}
        <div className="col-lg-12">
          <div className="ltn__blog-item ltn__blog-item-3">
            <div className="ltn__blog-img">
              <Link to="/blog-details"><img src={publicUrl+"assets/img/blog/5.jpg"} alt="#" /></Link>
            </div>
         
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  </div>
  )
}

export default TeamCarousel