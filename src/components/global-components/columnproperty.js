import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ColumnProperty = ({ community }) => {
  const [itemsToShow, setItemsToShow] = useState(8);
  const showmore = () => {
    setItemsToShow(community.length)
  }

  const showless = () => {
    setItemsToShow(8)
  }

  useEffect(() => {
    const $ = window.$;
    let publicUrl = process.env.PUBLIC_URL + '/';

    const minscript = document.createElement("script");
    minscript.async = true;
    minscript.src = publicUrl + "assets/js/main.js";
    document.body.appendChild(minscript);

    $('.go-top').find('a').on('click', function () {
      $(".quarter-overlay").fadeIn(1);
      $(window).scrollTop(0);
      setTimeout(function () {
        $(".quarter-overlay").fadeOut(300);
      }, 800);
    });

    $(document).on('click', '.theme-btn-1', function () {
      $('div').removeClass('modal-backdrop');
      $('div').removeClass('show');
      $('div').removeClass('fade');
      $('body').attr("style", "");
    });
  }, []);


  let publicUrl = process.env.PUBLIC_URL + '/';
  let imgattr = "Footer logo";

  return (
    <footer className="ltn__footer-area ">
      <div className="footer-top-area ">
        <div className="container section-bg-1 pt-30 shadowboxing">
          <div className='col-lg-12 '>
            <div className="row">
              {

                community?.slice(0, itemsToShow).map((item, index) => (
                  <div key={index} className="col-xl-3 col-md-4 col-sm-4 col-12">
                    <div className="footer-widget-breadcrum footer-menu-widget clearfix">
                      <div className="footer-menu go-top">
                        <ul>
                          <li><Link to="/about">{item?.community_name}</Link></li>

                        </ul>
                      </div>

                    </div>
                  </div>
                ))

              }
              {(itemsToShow === 8) ? <div className='columncss' onClick={showmore}>Show More</div> : <div className="columncss" onClick={showless}>Show Less</div>}
            </div>


          </div>
        </div>
      </div>
    </footer>
  );
};

export default ColumnProperty;