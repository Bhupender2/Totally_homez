import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useDispatch, useSelector } from 'react-redux';
import { getTeamsApi } from '../../actions/teamActions';
import { TEAM_API_URL } from '../../constants/config';




const TeamV2 = () => {
	let publicUrl = process.env.PUBLIC_URL + '/'
	let imagealt = 'image'
	const dispatch = useDispatch()
	const { data } = useSelector((state) => state?.team?.team)

	useEffect(() => {
		dispatch(getTeamsApi())
	}, [dispatch])

	return (
		<div className="ltn__team-area ">
			<div className="container">
				<div className="row justify-content-center go-top pt-110 pb-90">
					
						{
							data?.map((item) => (
								<div className="col-lg-3 col-sm-6">
								<div key={item.id} className="ltn__team-item ltn__team-item-3---">

									<div className="team-img">
										<img src={`${TEAM_API_URL}/${item.path}`} alt="Image" />
									</div>
									<div className="team-info">
										<h4><Link to={`/team-details/${item?.id}`}>{item.name}</Link></h4>
										<h6 className="ltn__secondary-color">{item.designation}</h6>
										{/* <div className="ltn__social-media">
											<ul>
												<li><a href="#"><i className="fab fa-facebook-f" /></a></li>
												<li><a href="#"><i className="fab fa-twitter" /></a></li>
												<li><a href="#"><i className="fab fa-linkedin" /></a></li>
											</ul>
										</div> */}
									</div>
								</div>
								</div>



							))
						}



				</div>
			</div>
		</div>
	)
}



export default TeamV2