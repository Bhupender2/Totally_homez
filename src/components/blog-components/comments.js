import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Comments extends Component {
  render() {

   let publicUrl = process.env.PUBLIC_URL+'/'
    return (
    	<div>
					<div className="ltn__comment-area mb-50">
					<div className="ltn-author-introducing clearfix">
						<div className="author-img">
						<img src={publicUrl+"assets/img/blog/author.jpg"} alt="Author Image" />
						</div>
						<div className="author-info">
						<h6>Written by</h6>
						<h2>Rosalina D. William</h2>
						<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation is enougn for today.</p>
						</div>
					</div>
					<h4 className="title-2">03 Comments</h4>
					<div className="ltn__comment-inner">
						<ul>
						<li>
							<div className="ltn__comment-item clearfix">
							<div className="ltn__commenter-img">
								<img src={publicUrl+"assets/img/testimonial/1.jpg"} alt="Image" />
							</div>
							<div className="ltn__commenter-comment">
								<h6><a href="#">Adam Smit</a></h6>
								<span className="comment-date">20th May 2020</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
								<Link to="#" className="ltn__comment-reply-btn"><i className="icon-reply-1" />Reply</Link>
							</div>
							</div>
							<ul>
							<li>
								<div className="ltn__comment-item clearfix">
								<div className="ltn__commenter-img">
									<img src={publicUrl+"assets/img/testimonial/3.jpg"} alt="Image" />
								</div>
								<div className="ltn__commenter-comment">
									<h6><a href="#">Adam Smit</a></h6>
									<span className="comment-date">21th May 2020</span>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
									<Link to="#" className="ltn__comment-reply-btn"><i className="icon-reply-1" />Reply</Link>
								</div>
								</div>
							</li>
							</ul>
						</li>
						<li>
							<div className="ltn__comment-item clearfix">
							<div className="ltn__commenter-img">
								<img src={publicUrl+"assets/img/testimonial/4.jpg"} alt="Image" />
							</div>
							<div className="ltn__commenter-comment">
								<h6><a href="#">Adam Smit</a></h6>
								<span className="comment-date">25th May 2020</span>
								<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, omnis fugit corporis iste magnam ratione.</p>
								<Link to="#" className="ltn__comment-reply-btn"><i className="icon-reply-1" />Reply</Link>
							</div>
							</div>
						</li>
						</ul>
					</div>
					</div>
					<hr />
					<div className="ltn__comment-reply-area ltn__form-box mb-60---">
					<h4 className="title-2">Post Comment</h4>
					<form action="#">
						<div className="input-item input-item-textarea ltn__custom-icon">
						<textarea placeholder="Type your comments...." defaultValue={""} />
						</div>
						<div className="input-item input-item-name ltn__custom-icon">
						<input type="text" placeholder="Type your name...." />
						</div>
						<div className="input-item input-item-email ltn__custom-icon">
						<input type="email" placeholder="Type your email...." />
						</div>
						<div className="input-item input-item-website ltn__custom-icon">
						<input type="text" name="website" placeholder="Type your website...." />
						</div>
						<label className="mb-0 input-info-save"><input type="checkbox" name="agree" /> Save my name, email, and website in this browser for the next time I comment.</label>
						<div className="btn-wrapper">
						<button className="btn theme-btn-1 btn-effect-1 text-uppercase" type="submit"><i className="far fa-comments" /> Post Comment</button>
						</div>
					</form>
					</div>
     </div>

    )
  }
}

export default Comments;
