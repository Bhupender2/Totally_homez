import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getCatgoryProperties } from '../../actions/catgoryActions'
import { TEAM_API_URL } from '../../constants/config'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Curousal1 = (props) => {
    let carouselItems = [
        { id: 1, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
        { id: 2, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
        { id: 3, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
        { id: 4, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
        { id: 5, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
        { id: 6, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
        // Add more items as needed
    ];
    const [propertyCategory, setPropertyCategory] = useState("villa")
    let publicUrl = process.env.PUBLIC_URL + '/'
    let customClass = props.customClass ? props.customClass : ''
    // console.log(data)
    const { categoryProperties } = useSelector((state) => state.categoryProperties)
    console.log(categoryProperties)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCatgoryProperties(propertyCategory))
    }, [dispatch])
    if (categoryProperties?.length > 0) {
        carouselItems = categoryProperties


        console.log("categoryPropertiesSale", categoryProperties)
    }
    return (
        <div>
            <div>
                <div className="ltn__product-slider-area ltn__product-gutter mt-40  plr--7">
                    <div className="container-fluid">


                        <div className="row  slick-arrow-1">
                            <Carousel
                                additionalTransfrom={0}
                                arrows
                                autoPlay
                                autoPlaySpeed={3000}
                                centerMode={false}
                                containerClass="carousel-container"
                                dotListClass=""
                                draggable
                                focusOnSelect={false}
                                infinite
                                itemClass=""
                                keyBoardControl
                                minimumTouchDrag={80}
                                renderButtonGroupOutside={false}
                                renderDotsOutside={false}
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
                                        <div key={item?.id} className="ltn__product-item ltn__product-item-44 text-center---">
                                            <div className="product-img go-top">
                                                <Link to={`/property-details/${item?.id}`}><img src="https://famproperties.s3.ap-southeast-1.amazonaws.com/project-medium-banners/royal.jpg" alt="#" /></Link>
                                                <div className="product-badge420">
                                                    <ul>
                                                        <li className="sale-badge bg-green">Ready</li>
                                                    </ul>
                                                </div>

                                            </div>
                                            <div className="product-info666">
                                                <div className="product-price">
                                                    <div className="title_div">
                                                        <h2 className="product-title go-top">Project Name</h2>

                                                    </div>


                                                </div>
                                                <div className="price_div69">
                                                <span className="changesfont"> Starting Price-4654</span>
                                                </div>
                                                <div className="price_div69">
                                                <span className="changesfont"> Hand Over Date - June 2023</span>
                                                </div>
                                                <div>
                                                    
                                                </div></div>
                                        </div>

                                    </div>
                                ))}
                            </Carousel>




                            {/* ltn__product-item */}

                            {/*  */}
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Curousal1