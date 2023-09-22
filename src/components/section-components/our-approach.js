import React from 'react'
import { Link } from 'react-router-dom'
import ApartmentV1 from './apartment-v1'
import { ABOUT_IMAGE_URL } from '../../constants/config'

const OurApproach = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (

  <div className={customClass}>
  <div className="ltn__about-us-area pb-50  mt-50">
    <div className="container">
      {
        props?.aboutUsData?.map((about)=>(
          <div className="row">
          <div className="col-lg-6 align-self-center">
              <div className="about-us-img-wrap about-img-right">
                <img src={`${ABOUT_IMAGE_URL}/${about?.appro_img}`} alt="About Us Image" />
              </div>
            </div>
            <div className="col-lg-6 align-self-center">
              <div className="about-us-info-wrap">
                <div className="section-title-area ltn__section-title-2--- mb-30 ">
                  {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
                  <h1 className="section-title"><span>Our Approach</span>  </h1>
                  <p>{about?.appro_dsc}  </p>
    
                </div>
                {/* <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
                  <li> Experience the ultimate in luxury with 24-hour concierge service</li>
                  <li>Stay active with sports facilities, including tennis and golf courses</li>
                  <li>Stay entertained with state-of-the-art entertainment facilities</li>
                  
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
         {/*      <div className="read-more">
        <button className="btn theme-btn-1" >LEARN MORE</button>
    
          </div>*/}
             
              </div>
            </div>
            
          </div>
        ))
      }
   
    </div>
    {/* <ApartmentV1/> */}
  </div>
  
  </div>
  )
}

export default OurApproach