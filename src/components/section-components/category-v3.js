import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import ApartmentV1 from './apartment-v1';
import AboutV4 from './about-v4';
import ProductGrid from '../shop-components/ProductGrid';
import ProductSliderV1 from './product-slider-v1';
import Video from '../section-components/video-v2';
let publicUrl = process.env.PUBLIC_URL+'/'
let imagealt = 'image'


class CategoryV3 extends Component {

    render() {

       

    return (
<>
	<div className="ltn__banner-area pt-120 go-top">
				<div className="container">
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h1 className="section-title">Explore By Types</h1>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-8 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://www.sothebysrealty.com/blog-api/wp-content/uploads/2022/03/imagereader-4-5.jpeg"} >                        
						<div className="ltn__banner-info">
						<h1><Link to="/property/villa" className="categoryTitle" href="#aboutV4"> Villa </Link></h1>
						{/* <p> Great Deals Available</p> */}
						
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://static.propsearch.ae/dubai-locations/verdana-townhouses_g26IB_xl.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link className="categoryTitle" to="/property/townhouse">  Townhouse</Link></h3>
						{/* <p> Great Deals Available</p> */}
						
						</div>
					</div>
					</div>
					<div className="col-lg-4 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://assets.cntraveller.in/photos/60b9ed9c13fda2fd38ad7756/master/pass/Intercon%202-987142274-1366x768.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link className="categoryTitle" to="/property/apartment">  Apartment</Link></h3>
						{/* <p> Great Deals Available</p> */}
						
						</div>
					</div>
					</div>
					<div className="col-lg-8 col-md-6">
					<div className="ltn__banner-item ltn__banner-style-4 text-color-white bg-image" data-bs-bg= {"https://b.zmtcdn.com/data/pictures/2/18517832/8cac6410d980d6bcb310b7ba89d4dcf6.jpg"} >                        
						<div className="ltn__banner-info">
						<h3><Link className="categoryTitle" to="/property/penthouse">  Penthouse</Link></h3>
						{/* <p> Great Deals Available</p> */}
						
						</div>
					</div>
					</div>
					
				</div>
				</div>
			</div>
			{/* <ProductGrid /> */}

{/* <ApartmentV1 CustomClass="ltn__feature-area section-bg-3 pt-120 pb-90 mb-120---" /> */}

{/* <UpcomingProductV1 /> */}
{  //      <BestVilla customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---" />
}        



{/* <ProductSliderV1/> */}
{/* <BestApartment customClass="ltn__feature-area section-bg-6 pt-120 pb-90 mb-120---"  /> */}



	</>
	
	)
	
	
			
        }
}

export default CategoryV3