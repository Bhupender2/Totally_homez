import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';





const ThePerks = ({careerData}) => {
	let publicUrl = process.env.PUBLIC_URL+'/'
let imagealt = 'image'
  return (
	<div className="ltn__team-area pt-115 pb-90 go-top">
		{
						careerData?.map((career)=>(
							<div className="container">
					
				<div className="row">
					<div className="col-lg-12">
					<div className="section-title-area ltn__section-title-2--- text-center">
						<h1 className="section-title"><span>{career?.sec6_h} </span></h1>
					</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link>{career?.sec6_b1} </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link>{career?.sec6_b2} </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link>{career?.sec6_b3} </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link>{career?.sec6_b4} </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link>{career?.sec6_b5} </Link></h4>
					
						</div>
					</div>
					</div>
                    <div className="col-lg-4 col-sm-6">
					<div className="ltn__team-item ltn__team-item-3---">
						<div className="team-info">
						<h4><Link>{career?.sec6_b6} </Link></h4>
					
						</div>
					</div>
					</div>
				</div>
				</div>
						))
					}
				
			</div>
  )
}

export default ThePerks