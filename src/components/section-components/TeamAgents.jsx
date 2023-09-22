import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { getTeamsApi } from '../../actions/teamActions'
import { TEAM_API_URL } from '../../constants/config'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const TeamAgents = (props) => {
	let carouselItems = [
		{ id: 1, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 2, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 3, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/09/13/Damx3DMM-The-Penthouse-1200x800.jpg' },
		{ id: 4, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		{ id: 5, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		{ id: 6, content: 'https://www.timeoutdubai.com/cloud/timeoutdubai/2021/11/08/The-Penthouse.jpg' },
		// Add more items as needed
	];
	const { data } = useSelector((state) => state.team.team)
	const dispatch = useDispatch()
	let publicUrl = process.env.PUBLIC_URL + '/'
	let customClass = props.customClass ? props.customClass : ''
	let arr = [1, 2, 3, 4, 5];

	useEffect(() => {
		dispatch(getTeamsApi())
	}, [dispatch])

	if (data?.length > 0) {

		
			carouselItems = data

		
	}

	return (
		<div>
			<div>
				<div className="ltn__product-slider-area ltn__product-gutter  plr--7">
					<div className="container-fluid">
						<div className="row">
							<div className="col-lg-12">
								<div className="section-title-area ltn__section-title-2--- text-center">
									<h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Team</h6>
									<h1 className="section-title">Our Agents</h1>
								</div>
							</div>
						</div>
						<div className="row ltn__product-slider-full-width slick-arrow-1 centerclass">
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
								renderButtonGroupOutside={false}
								renderDotsOutside={false}
								responsive={{
									desktop: {
										breakpoint: { max: 3000, min: 1024 },
										items: 4,
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
								{

									carouselItems.map((item) => (

										<div key={item?.id} className=" col-lg-12 col-sm-6">
											<div className="ltn__team-item ltn__team-item-3---">
												<div className="team-img img2 wcallFlex">
													<img className="img2" src={`${TEAM_API_URL}/${item.path}`} alt="Image" />
												</div>
												<div className="team-info">
													<Link to={`/team-details/${item?.id}`}><h4>{item.name}</h4></Link>
													
													<h6 className=" designnation ltn__secondary-color">{item.designation}</h6>
												</div>
											</div>
										</div>

									))}
							</Carousel>

						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default TeamAgents