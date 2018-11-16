import React, { Component } from 'react';

import './voluntarios.css';

export class Volunteer extends Component {
	render() {
		return (
			<div>
				<section className="volunteer-area section-gap" id="voluntarios">
					<div className="container">
						<div className="row d-flex justify-content-center">
							<div className="col-md-8 pb-80 header-text">
								<h1>Nuestro equipo</h1>
								<p>
									Somos una institución sin ánimo de lucro, con el propósito de promover el mejoramiento de la calidad <br></br>
									de vida de las familias venezolanas que deciden quedarse en Cali. Buscamos establecer alianzas <br></br>
									estratégicas para brindar soluciones que promuevan el desarrollo político, económico y social integrando a las personas,
									las organizaciones y el estado. Tras observar las difíciles condiciones en las cuales llegaban <br></br>
									familias de venezolanos a la ciudad de Cali en busca de trabajo, dinero y un sustento, nos interesamos en desarrollar un mecanismo <br></br>
									por medio del cual los caleños pudieran ayudar a aliviar la crisis humanitaria de manera activa. Así, la idea de
									Hoy con Venezuela surge con el fin de empoderar familias venezolanas, ayudarlas a adaptarse a la ciudad y brindarles alivio
									por medio de donaciones y guia. Pretendemos generar empatia entre caleños y venezolanos.

								</p>
							</div>
						</div>
						<div className="fotos">
							<div className="col-lg-3 col-md-3 vol-wrap">
								<div className="single-vol">
									<div className="content">
										<a>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" src="./maria.png" alt="" />
											<div className="content-details fadeIn-bottom">
												<h4>MARIA JOSÉ OCHOA</h4>
												<p>
													Economista en formación de la universidad Icesi.
												</p>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 vol-wrap">
								<div className="single-vol">
									<div className="content">
										<a>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" src="./nicolas.png" alt="" />
											<div className="content-details fadeIn-bottom">
												<h4>NICOLÁS VÁSQUEZ P.</h4>
												<p>
													Estudiante de Economía & Negocios Internacionales de la Universidad ICESI.
								      		</p>
											</div>
										</a>
									</div>
								</div>
							</div>
							<div className="col-lg-3 col-md-3 vol-wrap">
								<div className="single-vol">
									<div className="content">
										<a>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" src="./steven.png" alt="" />
											<div className="content-details fadeIn-bottom">
												<h4>STEVEN MURIEL</h4>
												<p>
													Estudiante de Ingeniería de Sistemas de la Universidad ICESI.
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
