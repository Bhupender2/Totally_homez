import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const NewV1Team = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <div>
         <div className="ltn__gallery-area mb-120 pt-150 ">
         
				<div className="container">
					{/* (ltn__gallery-info-hide) Class for 'ltn__gallery-item-info' not showing */}
                    <h3>Meet The Team</h3>
                    <p>There is one central tenet that drives our Private Client team – to deliver a customer experience that is truly exceptional. We firmly believe in the concept of the ‘knowledge broker’, ensuring that every member of our team is an expert in their chosen area and can provide the most comprehensive and trusted property advice to their clients. We will work alongside you to seamlessly meet your property goals, offering a service that is built on the highest levels of professionalism and discretion.</p>
					<h3>The Management Team</h3>
                    <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
						<div className="ltn__gallery-sizer col-1" />
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Inline Description </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Youtube Video </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
							<a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Vimeo Video </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
							<a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">HTML5 Video </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Google Map </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Image Caption </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Not Found</Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>                
					</div>
				
					
					</div>
                    <div className="container pt-50">
					{/* (ltn__gallery-info-hide) Class for 'ltn__gallery-item-info' not showing */}
                    <h3>The Private Client Team</h3>
                    
                    <div className="ltn__gallery-active row ltn__gallery-style-2 ltn__gallery-info-hide---">
						<div className="ltn__gallery-sizer col-1" />
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Inline Description </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Youtube Video </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
							<a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Vimeo Video </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
							<a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">HTML5 Video </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Google Map </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Image Caption </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Not Found</Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_2 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_1 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
                            <a href="assets/img/team/112.jpg" data-rel="lightcase:myCollection">
                            <img src={publicUrl+"assets/img/team/112.jpg"} alt="Image" />
								
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>                
					</div>
				
					
					</div>
			</div>
    </div>
  )
}

export default NewV1Team

   

      


