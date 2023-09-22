import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getCarouselsApi } from '../../../actions/crouselActions';
import { TEAM_API_URL } from '../../../constants/config';

const Carousel = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const {carousels}=useSelector((state)=>state.carousels)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getCarouselsApi())
    },[])


  return (
    <div className={ "ltn__blog-area mt-50 pt-115--- pb-70 go-top "}>
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="section-title-area ltn__section-title-2--- text-center">
            <h1 className="section-title">Best Off Plan Properties</h1>
          </div>
        </div>
      </div>
      <div className="row  ltn__blog-slider-one-active  slick-arrow-1 ltn__blog-item-3-normal">
        {/* Blog Item */}


        {
            carousels?.map((carousel)=>(
                <div key={carousel.id} className="col-lg-3">
                <div className="ltn__blog-item ltn__blog-item-3 ">
                  <div className="ltn__blog-img">
                    <Link to={`/carousel/${carousel?.id}`}><img src={`${TEAM_API_URL}/${carousel.path}`} alt="carousel image" /></Link>
                  </div>
               
                </div>
              </div>

            ))
        }
       
        {/* Blog Item */}
       
        {/*  */}
      </div>
    </div>
  </div>
  )
}

export default Carousel