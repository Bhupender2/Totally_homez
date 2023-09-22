import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import NearBy from '../section-components/NearBy';
import { InlineWidget, PopupButton, PopupWidget } from "react-calendly";
import ShopGrid_V1 from '../shop-grid';
import { useStickyBox } from "react-sticky-box";
import { useDispatch } from 'react-redux';
import { getSingalPropertyDetailsApi } from '../../actions/propertiesActions';
import { getTeamDetailsApi } from '../../actions/teamActions';
import AgentDetails from './AgentDetails';
import IconButton from '@material-ui/core/IconButton';

import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import { Typography } from '@material-ui/core';

import { text } from '@fortawesome/fontawesome-svg-core';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import { classes } from 'istanbul-lib-coverage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

	container: {
		display: 'flex',
		justifyContent: 'space-between',
		gap: theme.spacing(1),
		padding:'10px',
		
		// Adjust the spacing between the buttons as needed
	},
	button: {
		borderRadius:'10px',
		border:'1px solid whitesmoke',
		width: '107px', // Set the desired fixed width
		color:'#eb2027',
		backgroundColor:'transparent',
		'&:hover': {
			color: 'white',
			backgroundColor: '#eb2027',
		}// Adjust the spacing between the buttons as needed
	},


	typographyText: {
		paddingLeft:'2px',
		textTransform:'capitalize',
	},
}));




const StickyBarIcon = ({ propertyDetails }) => {
	const hrStyle = {
		border: 'none', // Remove the default border
		borderTop: '1px solid black', // Set the style of the horizontal rule
		margin: '-25px 0 7px', // Adjust the margin as needed
	  };
      const classesMui = useStyles();

      return (
		<div className="ltn__shop-details-area stickyclassbar hidde indexing">


			<div className="container">
				<div className="row">
					<div className="col-lg-5">
						<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
							{/* Author Widget */}
							<div className="widget11 ltn__author-widget">
								
								
								<div className="property-detail-info-list section-bg-0 clearfix ">

									<div className={classesMui.container}>
										<IconButton className={classesMui.button}  aria-label="Delete">
											<PhoneIcon />
											        <Typography className={classesMui.typographyText} variant="button">Call</Typography>

										</IconButton>

										<IconButton className={classesMui.button} aria-label="Edit">
											<EmailIcon />
											        <Typography className={classesMui.typographyText} variant="button">Email</Typography>

										</IconButton>

										<IconButton className={classesMui.button} aria-label="Whatsapp">
											<WhatsAppIcon />
											        <Typography className={classesMui.typographyText} variant="button">Whatsapp</Typography>

										</IconButton>
									</div>



								</div>
							</div>
						</aside>
					</div>

				</div>

			</div>
		</div>
	)
}


export default StickyBarIcon