import React, { Component } from 'react';
import NumericInput from 'react-numeric-input';
import Select from 'react-select';

import './productos.css';

export class Producto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: null,
            id_productoTemp: 0,
            cantidadTemp: null,
            can_max: null,
            can_min: null,
            cantidadAnt: null,
            fechaTemp: new Date(),
            responsable: null,
            name: this.props.name,
            imagen: "Arroz",
            productos: [
                {
                    id_producto: 4,
                    nombre: "Arroz",
                    voluntarios: [
                        {
                            "vol-1": 1,
                        },
                        {
                            "vol-1": 2,
                        }
                    ],
                    cantidad: 5,
                    unidad_medida: "Libras",
                    estado: "insuficiente",
                    cant_min: 0,
                    cant_max: 100,
                },
                {
                    id_producto: 5,
                    nombre: "Ropa",
                    voluntarios: [
                        {
                            "vol-1": 1,
                        },
                        {
                            "vol-1": 2,
                        }
                    ],
                    cantidad: 10,
                    unidad_medida: "Kilogramos",
                    estado: "critico",
                    cant_min: 0,
                    cant_max: 500,
                },
                {
                    id_producto: 6,
                    nombre: "Zapato",
                    voluntarios: [
                        {
                            "vol-1": 1,
                        },
                        {
                            "vol-1": 2,
                        }
                    ],
                    cantidad: 20,
                    unidad_medida: "unidades",
                    estado: "suficientes",
                    cant_min: 0,
                    cant_max: 30,
                }
            ],
        }
    }

    handleChange = (selectedOption) => {
        this.setState({
            selectedOption : selectedOption,
            cantidadAnt: selectedOption.cantidad,
            can_max: selectedOption.can_max,
            can_min: selectedOption.can_min,
            imagen: selectedOption.label
        });
    }

    onGuardar(e) {

        var donacion = {
            id: this.state.id_productoTemp,
            id_producto: this.state.selectedOption,
            cantidad_nev: this.state.cantidadTemp,
            descripcion: this.state.descripcion,
            responsable: this.state.responsable,
            estado: this.state.estado
        }
        e.preventDefault();
        this.props.guardar(proyectos);
        this.setState({
            id: "",
            name: "",
            descripcion: "",
            responsable: "",
            fechaInicio: "",
            fechaEntrega: "",
            estado: ""
        });
    }

    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    render() {

        var opciones = [];

        var productos = this.state.productos.map(
            producto => {
                opciones.push({ value: producto.id_producto, label: producto.nombre, cantidad: producto.cantidad, cant_max: producto.cant_max, cant_min: producto.cant_min });
            }
        );

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
                                                <img src={"./imag_productos/" + this.state.imagen + "4.jpg"} alt="..." />
                                            </div>
                                            <div className="product_gallery">
                                                <a>
                                                    <img src={"./imag_productos/" + this.state.imagen + "3.jpg"} alt="..." />
                                                </a>
                                                <a>
                                                    <img src={"./imag_productos/" + this.state.imagen + "2.jpg"} alt="..." />
                                                </a>
                                                <a>
                                                    <img src={"./imag_productos/" + this.state.imagen + "3.jpg"} alt="..." />
                                                </a>
                                                <a>
                                                    <img src={"./imag_productos/" + this.state.imagen + "4.jpg"} alt="..." />
                                                </a>
                                            </div>
                                        </div>

                                        <div className="col-md-5 col-sm-5 col-xs-12">
                                            <form onSubmit={this.onGuardar.bind(this)}>
                                                <h3 className="prod_title">Productos que se encuentran registrados en el Sistema</h3>

                                                <p>A continuación encontrara información de la organización {this.props.name}.</p>
                                                <p>Descripción ...</p>
                                                <br />

                                                <div className="">
                                                    <h2>Productos: </h2>
                                                    <Select name="id_producto" id="lista-productos"
                                                        value={this.state.selectedOption}
                                                        onChange={this.handleChange}
                                                        options={opciones}
                                                    />
                                                </div>
                                                <br />

                                                <NumericInput id="cantidad-producto" mobile className="form-control" value={this.state.cantidadAnt} />
                                                <br />

                                                <input type="date" id="fecha" value={this.state.fechaTemp} className="form-control"></input>

                                                <div className="acciones">
                                                    <button id="guardar-boton" type="button" className="btn btn-success btn-xs">Guardar</button>
                                                    <a href="./inventario" id="cancelar-boton" type="button" className="btn btn-danger btn-xs" >Cancelar</a>
                                                </div>
                                            </form>
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
