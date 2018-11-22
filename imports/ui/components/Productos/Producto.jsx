import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import Select from 'react-select';

import './productos.css';

export class Producto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            name: this.props.name,
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() {

        const options = [
            { value: 'chocolate', label: 'Chocolate' },
            { value: 'strawberry', label: 'Strawberry' },
            { value: 'vanilla', label: 'Vanilla' }
        ];

        return (
            <div className="container">
                <div id="productos-page" className="right_col" role="main">
                    <div className="">
                        <div className="clearfix"></div>
                        <div className="row">
                            <div className="col-md-12 col-sm-12 col-xs-12">
                                <div className="x_panel">
                                    <div className="x_title">
                                        <h2>Productos de la  {this.props.name}</h2>
                                        <ul className="nav navbar-right panel_toolbox">
                                            <li><a className="collapse-link"><i className="fa fa-chevron-up"></i></a>
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

                                            <h3 className="prod_title">Productos que se encuentran registrados en el Sistema</h3>

                                            <p>A continuación encontrara información de la organización {this.props.name}.</p>
                                            <p>Descripción ...</p>
                                            <br />

                                            <div className="">
                                                <h2>Productos: </h2>
                                                <Select id="lista-productos"
                                                    value={this.state.selectedOption}
                                                    onChange={this.handleChange}
                                                    options={options}
                                                />
                                            </div>
                                            <br />

                                            <NumericInput id="cantidad-producto" mobile className="form-control" value={50} />
                                            <br />

                                            <div className="acciones">
                                                <button id="guardar-boton" type="button" className="btn btn-success btn-xs">Guardar</button>
                                                <button id="cancelar-boton" type="button" className="btn btn-danger btn-xs">Cancelar</button>
                                            </div>

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
