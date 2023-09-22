import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';



const FaqV1 = (props) => {
    let customClass = props.customClass ? props.customClass :''
let publicUrl = process.env.PUBLIC_URL+'/'
  return (
    <div className={customClass}>
        <center>
            <h2>
            FAQs
            </h2>
            
        </center>
  <div className="ltn__faq-area mb-100">
    <div className="container">
    <div className="row">
        <div className="col-lg-12">
        <div className="ltn__faq-inner ltn__faq-inner-2">
            <div id="accordion_2">
            {/* card */}
            <div className="card">
                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-1" aria-expanded="false">
                How to buy a product?
                </h6>
                <div id="faq-item-2-1" className="collapse" data-bs-parent="#accordion_2">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                </div>
                </div>
            </div>
            {/* card */}
            <div className="card">
                <h6 className="ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-2" aria-expanded="true"> 
                How can i make refund from your website?
                </h6>
                <div id="faq-item-2-2" className="collapse show" data-bs-parent="#accordion_2">
                <div className="card-body">
                    <div className="ltn__video-img alignleft">
                    <img src={publicUrl+"assets/img/bg/17.jpg"} alt="video popup bg image" />
                    <a className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----" href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0" data-rel="lightcase:myCollection">
                        <i className="fa fa-play" />
                    </a>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                </div>
                </div>
            </div>                          
            {/* card */}
            <div className="card">
                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-3" aria-expanded="false">
                I am a new user. How should I start?
                </h6>
                <div id="faq-item-2-3" className="collapse" data-bs-parent="#accordion_2">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                </div>
                </div>
            </div>
            {/* card */}
            <div className="card">
                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-4" aria-expanded="false">
                Returns and refunds
                </h6>
                <div id="faq-item-2-4" className="collapse" data-bs-parent="#accordion_2">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                </div>
                </div>
            </div>
            {/* card */}
            <div className="card">
                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-5" aria-expanded="false">
                Are my details secured?
                </h6>
                <div id="faq-item-2-5" className="collapse" data-bs-parent="#accordion_2">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                </div>
                </div>
            </div>
            {/* card */}
            <div className="card">
                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-6" aria-expanded="false">
                Sale code is not working
                </h6>
                <div id="faq-item-2-6" className="collapse" data-bs-parent="#accordion_2">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                </div>
                </div>
            </div>
            {/* card */}
            <div className="card">
                <h6 className="collapsed ltn__card-title" data-bs-toggle="collapse" data-bs-target="#faq-item-2-7" aria-expanded="false">
                How do I make payment by my credit card
                </h6>
                <div id="faq-item-2-7" className="collapse" data-bs-parent="#accordion_2">
                <div className="card-body">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Proin libero nunc consequat interdum. Condimentum lacinia quis vel eros donec ac. Mauris sit amet massa vitae tortor. Quisque id diam vel quam elementum pulvinar. Gravida in fermentum et sollicitudin ac orci phasellus. Facilisis gravida neque convallis a cras semper. Non arcu risus quis varius quam quisque id.</p>
                </div>
                </div>
            </div>
            </div>
         
        </div>
        </div>
        {
        
        /*
        
    
*/

}
       
    </div>
    </div>
</div>
    </div>
  
  )
}


export default FaqV1