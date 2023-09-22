import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class MapV2 extends Component {

	componentDidMount() {

    	const $ = window.$;
       
		let publicUrl = process.env.PUBLIC_URL+'/'
        const minscript = document.createElement("script");
        minscript.async = true;
        minscript.src = publicUrl + "assets/js/maplace-active.js";

        document.body.appendChild(minscript);

        const mapscript = document.createElement("script");
        mapscript.async = true;
        mapscript.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCeeHDCOXmUMja1CFg96RbtyKgx381yoBU';

        document.body.appendChild(mapscript);

    }

    render() {


    return <div className="ltn__google-map-locations-area">
				<div id="gmap" />
			</div>
        }
}

export default MapV2