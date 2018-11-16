import React, { Component } from 'react';

import Donate from '../components/Donate';

export class DonarPage extends Component {

    render() {
        return (
            <div>
                <header className="default-header">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="header-top d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <a href="/home"><img src="./logoV.png" alt="" /></a>
                                </div>
                                <div className="main-menubar d-flex align-items-center">
                                    <nav className="hide">
                                        <a href="/home" >Inicio</a>
                                        <a href="/donar" >Quiero Donar</a>
                                    </nav>
                                    <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Donate></Donate>
            </div>
        )
    }
}

export default DonarPage
