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
									Inmigrantes venezolanos en condiciones de pobreza extrema, que llegan a la ciudad de Cali en busca de oportunidades y no se sabe cómo ayudarles de manera efectiva.
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
												<a href="#" className="head-btn btn text-uppercase">DONA AHORA</a>
											</div>
										</div>
									</div>
								</div>
								<div className="details">
									<a target="_blank" href="https://www.laopinion.com.co/mundo/onu-cifra-en-3-millones-los-refugiados-y-migrantes-venezolanos-en-el-mundo-165444"><h2>La ONU cifra en 3 millones los refugiados y migrantes venezolanos en el mundo</h2></a>
									<p>El número de refugiados y migrantes venezolanos en el mundo ha alcanzado los tres millones, según la Agencia de Naciones Unidas para los Refugiados (ACNUR) y la Organización Internacional de las Migraciones (OIM).</p>
									<a className="text-uppercase" target="_blank"  href="https://www.laopinion.com.co/mundo/onu-cifra-en-3-millones-los-refugiados-y-migrantes-venezolanos-en-el-mundo-165444">Leer más</a>
								</div>

							</div>
							<div className="col-lg-4 col-md-4 project-wrap">
								<div className="single-project">
									<div className="content">
										<div>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" height="360" width="311" src="./d2.jpg" alt="" />
											<div className="content-details fadeIn-bottom">
												<a href="" className="head-btn btn text-uppercase">DONA AHORA</a>
											</div>
										</div>
									</div>
								</div>
								<div className="details">
									<a target="_blank"  href="https://www.eitb.eus/es/noticias/internacional/detalle/5971550/la-union-europea-prolonga-sus-sanciones-venezuela-noviembre-2019/"><h2>La UE prolonga sus sanciones a Venezuela otro año por ‘deterioro situación’</h2></a>
									<p>La Unión Europea (UE) ha acordado este martes prolongar otro año el embargo de armas decretado a Venezuela y las sanciones individualizadas “contra responsables de la represión en el país”, al considerar que continúa el "deterioro de la situación" a causa de la crisis política.</p>
									<a className="text-uppercase" target="_blank"  href="https://www.eitb.eus/es/noticias/internacional/detalle/5971550/la-union-europea-prolonga-sus-sanciones-venezuela-noviembre-2019/">Leer más</a>
								</div>
							</div>
							<div className="col-lg-4 col-md-4 project-wrap">
								<div className="single-project">
									<div className="content">
										<div>
											<div className="content-overlay"></div>
											<img className="content-image img-fluid d-block mx-auto" height="350" width="311" src="./vene.png" alt="" />
											<div className="content-details fadeIn-bottom">
												<a href="#" className="head-btn btn text-uppercase">DONA AHORA</a>
											</div>
										</div>
									</div>
								</div>
								<div className="details">
									<a href="https://www.eltiempo.com/economia/sector-financiero/reunificacion-familiar-disparara-migracion-de-venezolanos-banco-mundial-289324" target="_blank" ><h2>Reunificación familiar disparará migración venezolana: Banco Mundial</h2></a>
									<p>El reto humanitario de acoger y atender a los más de 1,2 millones de venezolanos que han entrado al país y decidieron quedarse podría multiplicarse en el mediano plazo y forzar aún más la capacidad de respuesta del Estado colombiano por causa de un factor que hasta ahora no era muy visible: la reunificación familiar de los migrantes.</p>
									<a className="text-uppercase" target="_blank"  href="https://www.eltiempo.com/economia/sector-financiero/reunificacion-familiar-disparara-migracion-de-venezolanos-banco-mundial-289324">Leer más</a>
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
