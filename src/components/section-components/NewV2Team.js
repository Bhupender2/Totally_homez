import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const NewV2Team = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <div>
         <div className="ltn__gallery-area mb-120 pt-150 ">
         
				<div className="container">
					{/* (ltn__gallery-info-hide) Class for 'ltn__gallery-item-info' not showing */}
					<h3>Categories</h3>
                    <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
						<div className="ltn__gallery-sizer col-1" />
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-3 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={"https://prod-cdn.damacproperties.com/sites/default/files/styles/node_slider/public/field/image/main.png"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Townhouse</Link></h4>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-3 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Penthouse </Link></h4>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-3 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Villa </Link></h4>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-3 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
							<a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Apartment </Link></h4>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						
						{/* gallery-item */}
						
						{/* gallery-item */}
					              
					</div>
				
					
					</div>
                  
			</div>
    </div>
  )
}

export default NewV2Team

   

      


