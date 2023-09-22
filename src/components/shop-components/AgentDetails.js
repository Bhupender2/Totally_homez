import React, { useEffect } from 'react'
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import { useDispatch, useSelector } from 'react-redux';
import { getTeamDetailsApi } from '../../actions/teamActions';
import { TEAM_API_URL } from '../../constants/config';

const AgentDetails = ({agentId}) => {
	let publicUrl = process.env.PUBLIC_URL + '/'

    const {data}=useSelector((state)=>state?.teamDetails?.teamDetails)
    console.log(agentId)

    const dispatch=useDispatch()

    useEffect(()=>{
        dispatch(getTeamDetailsApi(parseInt(agentId)))
    },[dispatch])
  return (
    <div className="widget ltn__author-widget">
								<div className="ltn__author-widget-inner text-center">
									<center>

									<img src={publicUrl + "assets/img/team/Aditi.jpg"} alt="#" />

										<h5>Aditi Khadka</h5>
										<small>Property Adviser</small>

									</center>

									<div className="product-ratting">

									</div>
									<br />
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis distinctio, odio, eligendi suscipit reprehenderit atque.</p>
									<div className="ltn__social-media">
										<center>
											{/* <Link className="btn btn-effect-3" to="/contact">Call</Link> */}
											<PopupButton
												url="https://calendly.com/prashant-vashisth/counsaltant"

												className="btn theme-btn-1"
												rootElement={document.getElementById("root")}
												text="Click here to schedule!"
											/>
										</center>




									</div>

								</div>
							</div>
  )
}

export default AgentDetails