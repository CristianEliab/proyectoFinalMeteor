import React, { Component } from 'react';
import InventarioItem from './InventarioItem';

import '../../css/nprogress.css';
import './inventario.css';

export class Inventario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      listaProductos: [
        {
          id: '1',
          nombre: 'Arroz',
          n_voluntarios: ['1','2','3'],
          c_inventario: '10',
          estado: 'danger'
        },
        {
          id: '2',
          nombre: 'Lentejas',
          n_voluntarios: ['1','2'],
          c_inventario: '99',
          estado: 'success'
        },
        {
          id: '3',
          nombre: 'Pollo',
          n_voluntarios: ['1','2','3'],
          c_inventario: '20',
          estado: 'danger'
        }
      ]

    }

  }

  componentWillMount() {
    this.render();
  }

  render() {

    console.log(this.state.listaProductos);
    var productos = this.state.listaProductos.map(producto => {
      return (
        <InventarioItem pro={producto} key={producto.id}></InventarioItem>
      );
    })

    var estilo = {
      width: '1%'
    };
    var estilo2 = {
      width: '20%'
    };
    return (
      <div className="Inventarios ">
        <div className="container body">

          <div className="inventario">

            <div className="right_col" role="main">
              <div className="">
                <div className="page-title">
                  <div className="title_left">
                    <h3>Inventario <small>Lista de productos de {this.props.name} </small></h3>
                  </div>
                </div>

                <div className="clearfix"></div>

                <div className="row">
                  <div className="col-md-12">
                    <div className="x_panel">
                      <div className="x_title">
                        <h2>Elementos Donados</h2>
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

                        <p>Todos los productos necesarios que se requieren para donación en la {this.props.name} </p>

                        <table className="table table-striped projects">
                          <thead>
                            <tr>
                              <th style={estilo}>Identificador</th>
                              <th style={estilo2}>Nombre del producto</th>
                              <th>N° de voluntarios</th>
                              <th>Cantidad en inventario</th>
                              <th>Estado</th>
                              <th style={estilo2}>Acciones</th>
                            </tr>
                          </thead>
                          <tbody>
                            {productos}
                          </tbody>
                        </table>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <footer className="footer-area section-gap">
          <div className="container">
            <div className="row d-flex flex-column justify-content-center">
              <ul className="footer-menu">
              </ul>
              <div className="footer-social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-dribbble"></i></a>
                <a href="#"><i className="fa fa-behance"></i></a>
              </div>
              <p className="footer-text m-0">
                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved
                            </p>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Inventario
