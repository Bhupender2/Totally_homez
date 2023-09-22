import React from 'react'
import { Link } from 'react-router-dom';

const PageHead = (props) => {
    let HeaderTitle = props.headertitle;
    let publicUrl = process.env.PUBLIC_URL+'/'
    let Subheader = props.subheader ? props.subheader : "Villa"
	let Subheader2 = props.subheader ? props.subheader : "Jumeirah"

	let Subheader3 = props.subheader ? props.subheader : "Garden Homes"
	let Subheader4 = props.subheader ? props.subheader : "Garden Homes Frond C"


    let CustomClass = props.customclass ? props.customclass : ''
  return (
    <div>
        	<div className={"ltn__breadcrumb-area text-left bg-overlay-white-30 bg-image "+CustomClass} data-bs-bg={publicUrl+"assets/img/bg/14.jpg"}>
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">{ HeaderTitle }</h1>
					<div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" /></span> Dubai</Link></li>
						<li>{ Subheader }</li>
						<li>{ Subheader2 }</li>

						<li>{ Subheader3 }</li>

						<li>{ Subheader4 }</li>

						</ul>
					</div>
					</div>
					
				</div>
				</div>
			</div>
		</div>
		
    </div>
  )
}

export default PageHead