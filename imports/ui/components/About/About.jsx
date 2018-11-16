import React, { Component } from 'react'

import './about.css';

export class About extends Component {
	render() {
		return (
			<div>
				<section className="about-area" id="about">
					<div className="container-fluid">
						<div className="row d-flex justify-content-end align-items-center">
							<div className="col-lg-6 col-md-12 about-left no-padding">
								<img className="img-fluid" src="./about-img.jpg" alt="" />
							</div>
							<div className="col-lg-6 col-md-12 about-right">
								<h1>Llamado a la acción </h1>
								<ol type="1" className="footer-menu">
									<li>Consolidar asociaciones con empresas que proveen el transporte.</li>
									<li>Crear espacios para la enseñanza de menores de edad.</li>
									<li>Puntos de atención para brindar y diligenciar los documentos necesarios.</li>
									<li>Apertura de nuevos hogares y comedores.</li>
									<li>Registro (censo) de los venezolanos dentro de la ciudad y su ocupación o situación actual.</li>
									<li>Menores costos para el envío de remesas.</li>
									<li>Replicar el modelo a otras ciudades del país para abordar la problemática.</li>
								</ol>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default About
