import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useState } from 'react';
   




const PhotoContact= () => {
	let publicUrl = process.env.PUBLIC_URL+'/'
    


  return (
	<div>
		<div className="ltn__upcoming-project-area section-bg-1--- bg-image-top " data-bs-bg={publicUrl+"assets/img/bg/22.jpg"}>
			  <div className="container positioning1 col-lg-12">
			    
			     
			        <div className="col-lg-6">
                   {/*   <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Getting your property ready for sale is one of our first tasks! That is why we take the time to make sure your property is ready to attract buyers by giving it a fresh coat of paint if necessary and performing minor repairs or landscaping improvements. We also help you get your home ready to sell by staging it with the help of professional stagers. 
                      </h6>*/}

			        </div>
			    </div>
			  </div>
			</div>

  )
}


export default PhotoContact;