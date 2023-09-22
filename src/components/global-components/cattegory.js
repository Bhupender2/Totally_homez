import React from 'react'
import { Link } from 'react-router-dom';
import ColumnProperty from './columnproperty';

const CategoryBreadCrumss = (props) => {
    let HeaderTitle = props.headertitle;
    let publicUrl = process.env.PUBLIC_URL+'/'
    let Subheader = props.subheader ? props.subheader : "Villa"
	let Subheader2 = props.subheader ? props.subheader : "Jumeirah"

	let Subheader3 = props.subheader ? props.subheader : "Garden Homes"
	let Subheader4 = props.subheader ? props.subheader : "Garden Homes Frond C"


    let CustomClass = props.customclass ? props.customclass : ''
  return (
    <div>
        	<div className={"ltn__breadcrumb-area text-left   "+CustomClass} >
			<div className="container">
				<div className="row">
				<div className="col-lg-12">
					<div className="ltn__breadcrumb-inner">
					<h1 className="page-title">Villas For Sale In Jumeirah Golf Estates</h1>
					<div className="ltn__breadcrumb-list">
						<ul>
						<li><Link to="/"><span className="ltn__secondary-color"><i className="fas fa-home" style={{fontSize:'16px'}} /></span> Home</Link></li>
						<li><Link to="/">Category</Link></li>

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

export default CategoryBreadCrumss