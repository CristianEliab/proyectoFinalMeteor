import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer-area section-gap">
                    <div className="container">
                        <div className="row d-flex flex-column justify-content-center">
                            <ul className="footer-menu">
                                <li><a href="#home">Inicio</a></li>
                                <li><a href="#project">Noticias</a></li>
                                <li><a href="#about">Llamado a la acción</a></li>
                                <li><a href="#voluntarios">Nuestro equipo</a></li>
                            </ul>
                            <div className="footer-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                            <p className="footer-text m-0">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved 
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
