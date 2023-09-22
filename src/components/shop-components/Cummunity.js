import React, { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const Cummunity = () => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    const [content, setContent] = useState()
    const [showMore, setShowMore] = useState(false);
    const toggleShowMore = () => {
        setShowMore(!showMore);
      };
    const handleOptionClick = (option) => {
        // Update the content based on the selected option
        if (option === 'option1') {
          setContent('Corporate & Commercial');
        } else if (option === 'option2') {
          setContent('Finance & Banking');
        } else if (option === 'option3') {
          setContent('Property & Construction');
        }else if (option === 'option4') {
            setContent('Litigation');
        }else if (option === 'option5') {
            setContent('Arbitration & Mediation');
        }else if (option === 'option6') {
            setContent('General Crime');
        }else if (option === 'option7') {
            setContent('Intellectual Property');
        }else if (option === 'option8') {
            setContent('Media & Entertainment');
        }else if (option === 'option9') {
            setContent('Private Client & Family Business');
        }else if (option === 'option10') {
            setContent('Cross Border Investments & Trade');
        }else if (option === 'option11') {
            setContent('Insurance');
        }else if (option === 'option12') {
            setContent('Transport');
        }else if (option === 'option13') {
            setContent('Cyber');
        }else if (option === 'option14') {
            setContent('Property & Construction');
          }

      };
      useEffect(() => {
        // Scroll to the top of the page when the content changes
        window.scrollTo(0, 0);
      }, [content]);
  return (
    <div className="ltn__team-details-area mb-50 pt-40" >
                <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                    <div className="ltn__team-details-member-info text-center mb-40 ">
                        <div className="team-details-img">
                        <div className="ltn__utilize-menu">
                        <h1>Practice Areas</h1>
											<ul>
												<li onClick={() => handleOptionClick('option1')}><a href="#">Corporate & Commercial</a>

												</li>
												<li onClick={() => handleOptionClick('option2')}><Link >Finance & Banking</Link>
											
												</li>
												<li onClick={() => handleOptionClick('option3')}><Link >Property & Construction</Link>
												</li>
												<li onClick={() => handleOptionClick('option4')}><Link >Litigation</Link>

												</li>
												<li onClick={() => handleOptionClick('option5')}><Link>Arbitration & Mediation</Link>

												</li>
												<li onClick={() => handleOptionClick('option6')}><Link >General Crime</Link></li>
												<li onClick={() => handleOptionClick('option7')}><Link >Intellectual Property</Link></li>
												<li onClick={() => handleOptionClick('option8')}><Link >Media & Entertainment</Link></li>
                                                {showMore && (
                                                    <>
                                                    <li onClick={() => handleOptionClick('option9')}><Link >Private Client & Family Business</Link></li>
												<li onClick={() => handleOptionClick('option10')}><Link >Cross Border Investments & Trade</Link></li>
												<li onClick={() => handleOptionClick('option11')}><Link >Insurance</Link></li>
												<li onClick={() => handleOptionClick('option12')}><Link >Transport</Link></li>
												<li onClick={() => handleOptionClick('option13')}><Link>Cyber</Link></li>
												<li><Link to="/contact-us">Regulatory Approvals</Link></li>
												<li><Link to="/contact-us">Joint Ventures</Link></li>
												<li><Link to="/contact-us">Mergers & Acquisitions</Link></li>
												<li><Link to="/contact-us">Human Resources & Employment</Link></li>
												<li><Link to="/contact-us">Corporate Structuring & Insolvency</Link></li>
												<li><Link to="/contact-us">Infrastructure & Environmental</Link></li>
												<li><Link to="/contact-us">Competition & Antitrust</Link></li>
												<li><Link to="/contact-us">Education, Hospitality & Healthcare</Link></li>
												<li><Link to="/contact-us">Capital Markets & Securitisations</Link></li>
												<li><Link to="/contact-us">Wills & Probate</Link></li>
												<li><Link to="/contact-us">Notary Services</Link></li>
												<li><Link to="/contact-us">Company Formation</Link></li>
												<li><Link to="/contact-us">Corporation Services</Link></li>
												<li><Link to="/contact-us">Family & Matrimonial Disputes</Link></li>
												<li><Link to="/contact-us">Pro-Bono & CSR</Link></li>
                                                    </>
                                                    )}
						
											</ul>
                                            <div>
                                            <a onClick={toggleShowMore}>{showMore ? <i class="fa fa-angle-up" aria-hidden="true"></i> : <i class="fa fa-angle-down" aria-hidden="true"></i>}</a>
                                            </div>
                                        </div>
                        </div>
                      
                    </div>
                    </div>
                    <div className="col-lg-8">
                    <div className="ltn__team-details-member-info-details">
                    <h1>{content}</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                       
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequu ntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    
                    </div>
                    </div>
                </div>
                </div>
            </div>
  )
}

export default Cummunity
