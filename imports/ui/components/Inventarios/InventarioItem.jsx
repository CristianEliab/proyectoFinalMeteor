import React, { Component } from 'react'

export class InventarioItem extends Component {
    render() {

        var listaVoluntarios = this.props.pro.n_voluntarios.map(element => {
            return (
                <li key={element}>
                    <img src="./user.png" className="avatar" alt="Avatar" />
                </li>
            );
        });;


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
                    <button type="text" className={this.props.pro.estado == "success" ? "btn btn-success btn-xs" : "btn btn-danger btn-xs"}>{this.props.pro.estado}</button>
                </td>
                <td>
                    <a href="#" className="btn btn-primary btn-xs"><i className="fa fa-folder"></i> Ver </a>
                    <a href="#" className="btn btn-info btn-xs"><i className="fa fa-pencil"></i> Editar </a>
                    <a href="#" className="btn btn-danger btn-xs"><i className="fa fa-trash-o"></i> Eliminar </a>
                </td>
            </tr >
        )
    }
}

export default InventarioItem
