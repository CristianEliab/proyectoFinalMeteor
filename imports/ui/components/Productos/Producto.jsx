import React, { Component } from 'react'

export class Producto extends Component {
    render() {
        return (
            <div className="right_col" role="main">

                <div className="">
                    <div className="page-title">
                        <div className="title_left">
                            <h3>E-commerce :: Product Page</h3>
                        </div>

                        <div className="title_right">
                            <div className="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..." />
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="button">Go!</button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <div className="x_panel">
                                <div className="x_title">
                                    <h2>E-commerce page design</h2>
                                    <ul className="nav navbar-right panel_toolbox">
                                        <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
                                        </li>
                                        <li className="dropdown">
                                            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench"></i></a>
                                            <ul className="dropdown-menu" role="menu">
                                                <li><a href="#">Settings 1</a>
                                                </li>
                                                <li><a href="#">Settings 2</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a className="close-link"><i className="fa fa-close"></i></a>
                                        </li>
                                    </ul>
                                    <div className="clearfix"></div>
                                </div>
                                <div className="x_content">

                                    <div className="col-md-7 col-sm-7 col-xs-12">
                                        <div className="product-image">
                                            <img src="./prod-1.jpg" alt="..." />
                                        </div>
                                        <div className="product_gallery">
                                            <a>
                                                <img src="./prod-2.jpg" alt="..." />
                                            </a>
                                            <a>
                                                <img src="./prod-3.jpg" alt="..." />
                                            </a>
                                            <a>
                                                <img src="./prod-4.jpg" alt="..." />
                                            </a>
                                            <a>
                                                <img src="./prod-5.jpg" alt="..." />
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-md-5 col-sm-5 col-xs-12">

                                        <h3 className="prod_title">LOWA Men’s Renegade GTX Mid Hiking Boots Review</h3>

                                        <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terr.</p>
                                        <br />

                                        <div className="">
                                            <h2>Available Colors</h2>
                                            <ul className="list-inline prod_color">
                                                <li>
                                                    <p>Green</p>
                                                    <div className="color bg-green"></div>
                                                </li>
                                                <li>
                                                    <p>Blue</p>
                                                    <div className="color bg-blue"></div>
                                                </li>
                                                <li>
                                                    <p>Red</p>
                                                    <div className="color bg-red"></div>
                                                </li>
                                                <li>
                                                    <p>Orange</p>
                                                    <div className="color bg-orange"></div>
                                                </li>

                                            </ul>
                                        </div>
                                        <br />

                                        <div className="">
                                            <h2>Size <small>Please select one</small></h2>
                                            <ul className="list-inline prod_size">
                                                <li>
                                                    <button type="button" className="btn btn-default btn-xs">Small</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-default btn-xs">Medium</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-default btn-xs">Large</button>
                                                </li>
                                                <li>
                                                    <button type="button" className="btn btn-default btn-xs">Xtra-Large</button>
                                                </li>
                                            </ul>
                                        </div>
                                        <br />

                                        <div className="">
                                            <div className="product_price">
                                                <h1 className="price">Ksh80.00</h1>
                                                <span className="price-tax">Ex Tax: Ksh80.00</span>
                                                <br></br>
                                            </div>
                                        </div>

                                        <div className="">
                                            <button type="button" className="btn btn-default btn-lg">Add to Cart</button>
                                            <button type="button" className="btn btn-default btn-lg">Add to Wishlist</button>
                                        </div>

                                        <div className="product_social">
                                            <ul className="list-inline">
                                                <li><a href="#"><i className="fa fa-facebook-square"></i></a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-twitter-square"></i></a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-envelope-square"></i></a>
                                                </li>
                                                <li><a href="#"><i className="fa fa-rss-square"></i></a>
                                                </li>
                                            </ul>
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Producto
