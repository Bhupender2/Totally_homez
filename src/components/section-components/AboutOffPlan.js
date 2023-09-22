import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Popup from '../Popup';
import { Button } from '@material-ui/core';
import PopForm from './PopForm';
import { useDispatch, useSelector } from 'react-redux';
import { getOffPlanApi } from '../../actions/offPlanActions';
// import Popup from './popup';

const AboutOffPlan = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const [open,setOpen]=useState(false)
    
    const { offPlan }=useSelector(state=>state.offPlan)
    const dispatch = useDispatch()

    useEffect(() => {
  
     dispatch(getOffPlanApi())
    }, [dispatch])
    
  

  return (
    <div className="ltn__about-us-area ">
    <div className="container">
      <div className="row">
      <div className="col-lg-7 align-self-center">
          <div className="about-us-info-wrap mt-100 pt-120">
            <div className="section-title-area ltn__section-title-2--- mb-20">
              <h1 className="section-title">SO  UPTOWN DUBAI
           </h1>


                <h3>
                Apartments, Duplexes & Penthouses <br/>

Get Project Brochure


Discover More <br/>
by Accor x DMCC in Uptown Dubai
                </h3>
              <p>
                
              SO/ Uptown Dubai Hotel & Residences is a 340-meter tower
offering residences, office spaces and hotel suites. Among
offered residences are 1–3 bedroom apartments, 2-bedroom
duplexes and two exclusive 3-bedroom penthouses for sale
                
                </p>
            </div>
            <div className="btn-wrapper animated go-top">
            <Link 
               onClick={() => { setOpen(true) }}

            className="theme-btn-1 btn btn-effect-1">DISCOVER MORE</Link>

              <Link 
               onClick={() => { setOpen(true) }}
               className="theme-btn-1 btn btn-effect-1">GET PROJECT BROCHURE</Link>
              {/* <Button
                        text="Add New"
                        variant="outlined"
                        startIcon={<AddIcon />}
                        className={classes.newButton}
                    /> */}
                  <Popup
                   title="Discover More "
                  open={open}
                  setOpen={setOpen}
                  >

                  <PopForm/>
                  </Popup>
            </div>
            <ul className="ltn__list-item-half clearfix pt-100">
              
              <li>
                {/* <i className="flaticon-cash" /> */}
                {/* <i className="flaticon-cash" /> */}
                <img src="assets/img/marina-svg.png" style={{"width":"20%"}}/>
                AED 1,780,000
                <br/>
                Starting Price


              </li>
              <li>
                {/* <i className="flaticon-heart" /> */}
                <img src="assets/img/book-svg.png" style={{"width":"20%"}}/>

                Easy 20/80 <br/> handover
                


</li>
              <li>
                {/* <i className="flaticon-secure" /> */}
                <img src="assets/img/handover-svg.png" style={{"width":"20%"}}/>

                Q3 2023          
                
                <br/>
                Payment Plan


                    </li>
            </ul>
           
           

            <div className="btn-wrapper animated go-top">
            </div>
          </div>
        </div>
        <div className="col-lg-5 align-self-center">
          <div className="about-us-img-wrap about-img-left">
            <img src={publicUrl+"assets/img/others/13.png"} alt="About Us Image" />
            <div className="about-us-img-info about-us-img-info-2 about-us-img-info-3">
              <div className="ltn__video-img ltn__animation-pulse1">
                <img src={publicUrl+"assets/img/others/13.png" } alt="video popup bg image" />
                <a className="ltn__video-icon-2 ltn__video-icon-2-border---" href="https://www.youtube.com/embed/xyUZ3lJpF5s?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                  <i className="fa fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default AboutOffPlan

