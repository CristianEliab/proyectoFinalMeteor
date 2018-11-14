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
                                <li><a href="#about">Nuestro equipo</a></li>
                            </ul>
                            <div className="footer-social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-dribbble"></i></a>
                                <a href="#"><i className="fa fa-behance"></i></a>
                            </div>
                            <p className="footer-text m-0">
                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
