import React from 'react'

const BestTownhouse = (props) => {
    let publicUrl = process.env.PUBLIC_URL+'/'
    let customClass = props.customClass ? props.customClass :''

  return (
    <div className={customClass}>
       <div className="ltn__about-us-area pt-40 pb-50 ">
    <div className="container">
      <div className="row">
      <div className="col-lg-6 align-self-center">
          <div className="about-us-img-wrap about-img-right">
            <img src={publicUrl+"assets/img/others/9.png"} alt="About Us Image" />
          </div>
        </div>
        <div className="col-lg-6 align-self-center">
          <div className="about-us-info-wrap">
            <div className="section-title-area ltn__section-title-2--- mb-30">
              {/* <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">About Us</h6> */}
              <h1 className="section-title">Best Townhouses In Dubai  </h1>
              <p>
Live in style and comfort with our spacious townhouses in Dubai's most sought-after communities.
</p>
            </div>
            <ul className="ltn__list-item-1 ltn__list-item-1-before clearfix">
              <li> Enjoy the benefits of community living with access to world-class amenities.</li>
              <li>Relax in your own private garden or terrace with beautiful views of the city skyline or lush green parks</li>
              <li>Stay secure with 24/7 security and CCTV surveillance for peace of mind in your family-friendly townhouse.</li>
            
            </ul>
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before ltn__flat-info">
              <li><span>3 <i className="flaticon-bed" /></span>
                Bedrooms
              </li>
              <li><span>2 <i className="flaticon-clean" /></span>
                Bathrooms
              </li>
              <li><span>2 <i className="flaticon-car" /></span>
                Car parking
              </li>
              <li><span>3450 <i className="flaticon-square-shape-design-interface-tool-symbol" /></span>
                square Ft
              </li>
            </ul> */}
            {/* <ul className="ltn__list-item-2 ltn__list-item-2-before--- ltn__list-item-2-img mb-50">
              <li>
                <a href={publicUrl+"assets/img/img-slide/11.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/11.jpg"} alt="Image" />
                </a>
              </li>
              <li>
                <a href={publicUrl+"assets/img/img-slide/12.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/12.jpg"} alt="Image" />
                </a>
              </li>
              <li>
                <a href={publicUrl+"assets/img/img-slide/13.jpg"} data-rel="lightcase:myCollection">
                  <img src={publicUrl+"assets/img/img-slide/13.jpg"} alt="Image" />
                </a>
              </li>
            </ul> */}
          </div>
        </div>
       
      </div>
    </div>
  </div>
    </div>
   
  )
}

export default BestTownhouse