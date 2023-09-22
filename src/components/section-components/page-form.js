import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import { useState } from 'react';





const Pageform = () => {
  let publicUrl = process.env.PUBLIC_URL + '/'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Perform form submission logic here
    console.log(formData);
    // Reset form data
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
  };


  return (
    <div>
      <div className="ltn__upcoming-project-area section-bg-1--- bg-image-top pt-40 " data-bs-bg={publicUrl + "assets/img/bg/22.jpg"}>
        <div className="container positioning1 col-lg-12">

          <div className='row'>
            <div className="col-lg-6">
              <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color--- white-color">Area Guide - Dubai Hills Estate
              </h6>
              <p className=" white-color textsizingsmall">Dubai Hills Estate is an extensive residential and lifestyle development comprising villas, low-rise apartments and townhouses. It is a key part of the growing MBR City. The very finest properties and leisure destinations can be found in Dubai Hills, including a championship golf course.
              </p>
              <div className="btn-wrapper animated go-top">
                <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Learn More</Link>
              </div>
            </div>

            <div className="col-lg-6">

<div className="ltn__upcoming-project-info ltn__menu-widget pt-20">

  <form className="contact-form whitecoloringbg" onSubmit={handleSubmit}>
    <h2>Contact Form</h2>
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required

      />
    </div>
    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="phone">Phone Number</label>
      <input
        type="email"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
    </div>
    <div className="btn-wrapper animated go-top">
      <Link to="/contact" className="theme-btn-1 btn btn-effect-1">Submit</Link>
    </div>
  </form>

</div>
</div>
          </div>




          {/* upcoming-project-item */}
         
        </div>
      </div>
    </div>


  )
}


export default Pageform;