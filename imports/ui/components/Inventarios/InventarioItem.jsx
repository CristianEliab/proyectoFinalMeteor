import React, { Component } from 'react'

export class InventarioItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: this.props.name,
            options: null
        }
    }

    handleEditar() {
        var opt = {
            aanimationEnabled: true,
            theme: "light2",
            title: {
                text: this.props.pro.nombre
            },
            axisX: {
                valueFormatString: "DD MMM",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true
                }
            },
            axisY: {
                title: "Cantidad de artículos",
                crosshair: {
                    enabled: true
                }
            },
            toolTip: {
                shared: true
            },
            legend: {
                cursor: "pointer",
                verticalAlign: "bottom",
                horizontalAlign: "left",
                dockInsidePlotArea: true,
            },
            data: [
                {
                    type: "line",
                    showInLegend: true,
                    name: "Unique Visit",
                    lineDashType: "dash",
                    dataPoints: [
                        { x: new Date(2017, 0, 3), y: 510 },
                        { x: new Date(2017, 0, 4), y: 560 },
                        { x: new Date(2017, 0, 5), y: 540 },
                        { x: new Date(2017, 0, 6), y: 558 },
                        { x: new Date(2017, 0, 7), y: 544 },
                        { x: new Date(2017, 0, 8), y: 693 },
                        { x: new Date(2017, 0, 9), y: 657 },
                        { x: new Date(2017, 0, 10), y: 663 },
                        { x: new Date(2017, 0, 11), y: 639 },
                        { x: new Date(2017, 0, 12), y: 673 },
                        { x: new Date(2017, 0, 13), y: 660 },
                        { x: new Date(2017, 0, 14), y: 562 },
                        { x: new Date(2017, 0, 15), y: 643 },
                        { x: new Date(2017, 0, 16), y: 570 }
                    ]
                }]

        }
        this.setState({
            options : opt
        });
        this.props.onClickItem(opt);
    }

    render() {
        var listaVoluntarios = this.props.pro.n_voluntarios.map(element => {
            return (
                <li key={element}>
                    <img src="./user.png" className="avatar" alt="Avatar" />
                </li>
            );
        });


        return (
            <tr>
                <td>{this.props.pro.id}</td>
                <td>
                    <a>{this.props.pro.nombre}</a>
                    <br />
                    <small>Created 01.01.2015</small>
                </td>
                <td>
                    <ul className="list-inline">
                        {listaVoluntarios}
                    </ul>
                </td>
                <td className="project_progress">
                    <p id="n_productos">Número de productos: {this.props.pro.c_inventario}/100</p>
                    <progress value={this.props.pro.c_inventario} max="100">{this.props.pro.c_inventario} %</progress>
                </td>
                <td>
                    <span className={this.props.pro.estado == "disponible" ? "badge badge-success btn-xs" : "badge badge-danger btn-xs"}>{this.props.pro.estado}</span>
                </td>
                <td className="acciones">
                    <button id="ver-elemento" className="btn btn-success btn-xs" onClick={this.handleEditar.bind(this)}><i className="fa fa-eye" ></i>Ver</button>
                    <a id="eliminar-elemento" href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Eliminar </a>
                </td>
            </tr >
        )
    }
}

export default InventarioItem
