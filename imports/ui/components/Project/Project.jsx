import React, { Component } from 'react';
import { Player } from 'video-react';



export class Project extends Component {
	render() {
		return (
			<div>
				<section className="project-area section-gap" id="project">
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-md-8 pb-80 header-text">
								<h1>Noticias sobre Venezuela</h1>
								<p>
									Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut <br></br> labore  et dolore magna aliqua.
							</p>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-4 col-md-4 project-wrap">
								<div className="single-project">
									<div className="content">
										<div>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" height="350" width="311" src="./d1.jpg" alt="" />
											<div className="content-details fadeIn-bottom">
												<a href="#" className="head-btn btn text-uppercase">Donate Now</a>
											</div>
										</div>
									</div>
								</div>
								<div className="details">
									<a href="#"><h2>Easy Flight Search</h2></a>
									<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
									<a className="text-uppercase" href="#">Leer más</a>
								</div>

							</div>
							<div className="col-lg-4 col-md-4 project-wrap">
								<div className="single-project">
									<div className="content">
										<div>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" height="360" width="311" src="./d2.jpg" alt="" />
											<div className="content-details fadeIn-bottom">
												<a href="#" className="head-btn btn text-uppercase">Donate Now</a>
											</div>
										</div>
									</div>
								</div>
								<div className="details">
									<a href="#"><h2>Easy Flight Search</h2></a>
									<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
									<a className="text-uppercase" href="#">Leer más</a>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 project-wrap">
								<div className="single-project">
									<div className="content">
										<div>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" height="350" width="311" src="./vene.png" alt="" />
											<div className="content-details fadeIn-bottom">
												<a href="#" className="head-btn btn text-uppercase">Donate Now</a>
											</div>
										</div>
									</div>
								</div>
								<div className="details">
									<a href="#"><h2>Easy Flight Search</h2></a>
									<p>inappropriate behavior is often laughed off as “boys will be boys,” women face higher conduct women face higher conduct.</p>
									<a className="text-uppercase" href="#">Leer más</a>
								</div>
							</div>

						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Project
