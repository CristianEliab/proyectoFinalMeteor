import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <div>
                <header className="default-header">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="header-top d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <a href="#home"><img src="img/logo.png" alt="" /></a>
                                </div>
                                <div className="main-menubar d-flex align-items-center">
                                    <nav className="hide">
                                        <a href="#home">Home</a>
                                        <a href="#project">Projects</a>
                                        <a href="#about">About</a>
                                        <a href="#donate">Donate</a>
                                    </nav>
                                    <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
export default Header
