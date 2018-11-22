import React, { Component } from 'react';

import Producto from '../components/Productos/Producto';

export class ProductosPage extends Component {
    render() {

        let currentUser = this.props.currentUser;
        let userDataAvailable = (currentUser !== undefined);
        let loggedIn = (currentUser && userDataAvailable);
        
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
                                        <a href="./productos" >Productos</a>
                                        <a href="./inventario" >Inventario</a>
                                        <a href="#" onClick={this.logout}>Logout</a>
                                    </nav>
                                    <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <Producto name={loggedIn ? 'Organización ' + currentUser.username : ''} ></Producto>
            </div>
        )
    }
}

export default ProductosPage
