import React, { Component } from 'react'

export class Volunteer extends Component {
  render() {
    return (
      <div>
        <section className="volunteer-area section-gap">
				<div className="container">
					<div className="row d-flex justify-content-center">
						<div className="col-md-8 pb-80 header-text">
							<h1>Our Volunteers</h1>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br></br> labore  et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-3 vol-wrap">
							<div className="single-vol">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="./v1.jpg" alt="" />
								      	<div className="content-details fadeIn-bottom">
								      		<h4>Andy Florence</h4>
								      		<p>
								      			inappropriate behavior
								      		</p>
								      	</div>
								    </a>
								 </div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 vol-wrap">
							<div className="single-vol">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="./v2.jpg" alt="" />
								      	<div className="content-details fadeIn-bottom">
								      		<h4>Andy Florence</h4>
								      		<p>
								      			inappropriate behavior
								      		</p>
								      	</div>
								    </a>
								 </div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 vol-wrap">
							<div className="single-vol">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="./v3.jpg" alt="" />
								      	<div className="content-details fadeIn-bottom">
								      		<h4>Andy Florence</h4>
								      		<p>
								      			inappropriate behavior
								      		</p>
								      	</div>
								    </a>
								 </div>
							</div>
						</div>
						<div className="col-lg-3 col-md-3 vol-wrap">
							<div className="single-vol">
								<div className="content">
								    <a href="#" target="_blank">
								      <div className="content-overlay"></div>
								  		 <img className="content-image img-fluid d-block mx-auto" src="./v4.jpg" alt="" />
								      	<div className="content-details fadeIn-bottom">
								      		<h4>Andy Florence</h4>
								      		<p>
								      			inappropriate behavior
								      		</p>
								      	</div>
								    </a>
								 </div>
							</div>
						</div>

					</div>
				</div>
			</section>
      </div>
    )
  }
}

export default Volunteer
