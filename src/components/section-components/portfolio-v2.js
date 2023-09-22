import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PortfolioV1 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__gallery-area mb-120">
				<div className="container">
					{/* (ltn__gallery-info-hide) Class for 'ltn__gallery-item-info' not showing */}
					<div className="ltn__gallery-active row ltn__gallery-info-hide---">
						<div className="ltn__gallery-sizer col-1" />
						{/* gallery-item */}
						<div className="ltn__gallery-item filter_category_3 col-lg-4 col-sm-6 col-12">
						<div className="ltn__gallery-item-inner">
							<div className="ltn__gallery-item-img">
							<a href={publicUrl+"assets/img/gallery/1.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/1.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-search" />
								</span>
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
							<a href="#ltn__inline_description_1" data-rel="lightcase:myCollection">
								<img src={publicUrl+"/assets/img/gallery/2.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="far fa-file-alt" />
								</span>
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
							<a href="//www.youtube.com/embed/6v2L2UGZJAM?version=3" data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/3.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fab fa-youtube" />
								</span>
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
							<a href="https://player.vimeo.com/video/47362400" data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/4.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fab fa-vimeo-v" />
								</span>
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
							<a href={publicUrl+"/assets/media/1.mp4"} data-rel="lightcase:myCollection">
								<img src={publicUrl+"/assets/img/gallery/5.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-video" />
								</span>
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
							<a href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1575.9076122223137!2d144.96590401578402!3d-37.81779982944919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b6af832249%3A0xe39e415e49a7c44e!2sFlinders%20Street%20Railway%20Station!5e0!3m2!1sen!2sbd!4v1598113544515!5m2!1sen!2sbd" data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/6.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-map-marker-alt" />
								</span>
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
							<a href={publicUrl+"assets/img/gallery/1.jpg"} data-rel="lightcase:myCollection" data-bs-lc-caption="Your caption Here">
								<img src={publicUrl+"assets/img/gallery/7.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fab fa-acquisitions-incorporated" />
								</span>
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
							<a href={publicUrl+"img/gallery/no-image.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/8.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-not-equal" />
								</span>
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
							<a href={publicUrl+"assets/img/gallery/1.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/9.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-search" />
								</span>
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
							<a href={publicUrl+"assets/img/gallery/1.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/10.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-search" />
								</span>
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
							<a href={publicUrl+"assets/img/gallery/1.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/1.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-search" />
								</span>
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
							<a href={publicUrl+"assets/img/gallery/1.jpg"} data-rel="lightcase:myCollection">
								<img src={publicUrl+"assets/img/gallery/2.jpg"} alt="Image" />
								<span className="ltn__gallery-action-icon">
								<i className="fas fa-search" />
								</span>
							</a>
							</div>
							<div className="ltn__gallery-item-info">
							<h4 className="go-top"><Link to="/portfolio-details">Portfolio Link </Link></h4>
							<p>Web Design &amp; Development, Branding</p>
							</div>
						</div>
						</div>                
					</div>
					<div id="ltn__inline_description_1" style={{display: 'none'}}>
						<h4 className="first">This content comes from a hidden element on that page</h4>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis mi eu elit tempor facilisis id et neque. Nulla sit amet sem sapien. Vestibulum imperdiet porta ante ac ornare. Nulla et lorem eu nibh adipiscing ultricies nec at lacus. Cras laoreet ultricies sem, at blandit mi eleifend aliquam. Nunc enim ipsum, vehicula non pretium varius, cursus ac tortor.</p>
						<p>Vivamus fringilla congue laoreet. Quisque ultrices sodales orci, quis rhoncus justo auctor in. Phasellus dui eros, bibendum eu feugiat ornare, faucibus eu mi. Nunc aliquet tempus sem, id aliquam diam varius ac. Maecenas nisl nunc, molestie vitae eleifend vel.</p>
					</div>
					<div className="btn-wrapper text-center">
						<Link to="#" className="btn btn-transparent btn-effect-3 btn-border">LOAD MORE +</Link>
					</div>
					</div>
			</div>
        }
}

export default PortfolioV1