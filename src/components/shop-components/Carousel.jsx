import React, { useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { getCarouselsApi } from '../../actions/crouselActions';
import { TEAM_API_URL } from '../../constants/config';
let carouselItems = [
    { id: 1, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
    { id: 2, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
    { id: 3, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
    { id: 4, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
    { id: 5, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
    { id: 6, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
    // Add more items as needed
];
const CarouselSlider = () => {
const {carousels}=useSelector((state)=>state.carousels)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCarouselsApi())
    }, [])

    if(carousels?.length>0){
        carouselItems=carousels
    }
    return (
        <Carousel
            additionalTransfrom={0}
            arrows
            centerMode={false}
            containerClass="carousel-container"
            dotListClass=""
            draggable
            focusOnSelect={false}
            infinite
            itemClass=""
            keyBoardControl
            minimumTouchDrag={80}
            renderButtonGroupOutside={true}
            renderDotsOutside={true}
            responsive={{
                desktop: {
                    breakpoint: { max: 3000, min: 1024 },
                    items: 3,
                },
                tablet: {
                    breakpoint: { max: 1024, min: 464 },
                    items: 2,
                },
                mobile: {
                    breakpoint: { max: 464, min: 0 },
                    items: 1,
                },
            }}
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
        >
            {carouselItems.map((item) => (
                <div className="col-lg-12">
                    <div key={item?.id} className="ltn__product-item ltn__product-item-4 text-center---">
                        <div className="product-img go-top">
                            <img className='carouselImages' src={`${TEAM_API_URL}/${item?.path}`} alt="#" />
                            <div className="product-badge">
                                <ul>
                                    <div class="flag-plan">40 / 60 Payment Plan</div>
                                </ul>
                            </div>

                        </div>
                        {/* <div className="product-info">
                   <div className="product-price">
                       <h2 className="product-title go-top"><Link to={`/property-details/${categoryProperty?.id}`}>{categoryProperty?.property_name}</Link></h2>

                       <span>AED {categoryProperty?.property_price}</span>


                   </div>
                   <div className="product-description">
                       <Link > {categoryProperty?.property_address}</Link><br></br>
                       <small>Ref No.{categoryProperty?.property_ref_no}</small>
                   </div>
                   <div><center>
                       <ul className="ltn__list-item-2 ltn__list-item-2-before">
                           <li><span> <i className="flaticon-bed" />  {categoryProperty?.property_no_of_bedroom}</span>
                           </li>
                           <li><span><i className="flaticon-clean" />  {categoryProperty?.property_no_of_bathroom} </span>
                           </li>
                           <li><span> <i className="flaticon-square-shape-design-interface-tool-symbol" />  {categoryProperty?.property_sq_ft} sqft</span>
                           </li>
                       </ul></center>
                   </div></div>
               <div className="product-info-bottom">
                   <div className="real-estate-agent wcallFlex">
                       <div className="agent-img go-top">
                           <Link to="/team-details">
                               <img src={`${TEAM_API_URL}/${categoryProperty?.path}`} alt="Image" />
                           </Link>
                       </div>
                       <div className="agent-brief go-top">
                           <h6><Link to={`/team-details/${categoryProperty?.property_agent_name}`}>{categoryProperty?.name}</Link></h6>

                       </div>
                   </div>
                   <div className="wcallFlex">
                       <ul className='wcallFlex'>
                           <li className='li1'>
                               <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal" className='wcallFlex'>
                                   <i className="fab fa-whatsapp callclass" ></i>
                                   <span className='callclass hideclass'>Whatsapp</span>
                               </a>
                           </li>
                           <li>
                               <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal" className='wcallFlex'>
                                   <i className="fa fa-phone rotateclass"></i>
                                   <span className='callclass hideclass'>Call</span>
                               </a>

                           </li>

                       </ul>
                   </div>
               </div> */}
                    </div>

                </div>
            ))}
        </Carousel>
    );

}

export default CarouselSlider