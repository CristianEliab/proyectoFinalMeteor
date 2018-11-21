import React, { Component } from 'react';

import Producto from '../components/Productos/Producto';

export class ProductosPage extends Component {
    render() {
        return (
            <div>
                <header className="default-header">
                    <div className="container">
                        <div className="header-wrap">
                            <div className="header-top d-flex justify-content-between align-items-center">
                                <div className="logo">
                                    <a href="#" onClick={this.logout}><img src="./logoV.png" alt="" /></a>
                                </div>
                                <div className="main-menubar d-flex align-items-center">
                                    <nav className="hide">
                                        <a href="#" onClick={this.logout}>Logout</a>
                                        <a href="./productos" >Productos</a>
                                        <a href="./inventario" >Inventario</a>
                                    </nav>
                                    <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Producto></Producto>
            </div>
        )
    }
}

export default ProductosPage
