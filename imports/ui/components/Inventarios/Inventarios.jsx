import React, { Component } from 'react';
import InventarioItem from './InventarioItem';
import Modal from 'react-modal';

// var CanvasJSReact = require('../../../../public/js/canvasjs.react');
// import CanvasJSReact from './canvasjs.react';
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;

import '../../css/nprogress.css';
import './inventario.css';

export class Inventario extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      modalIsOpen: false,
      listaProductos: [
        {
          id: '1',
          nombre: 'Arroz',
          n_voluntarios: ['1', '2', '3'],
          c_inventario: '10',
          estado: 'urgente'
        },
        {
          id: '2',
          nombre: 'Lentejas',
          n_voluntarios: ['1', '2'],
          c_inventario: '99',
          estado: 'disponible'
        },
        {
          id: '3',
          nombre: 'Pollo',
          n_voluntarios: ['1', '2', '3'],
          c_inventario: '20',
          estado: 'urgente'
        }
      ]
    }

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }


  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
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

    const customStyles = {
      content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
      }
    };

    const options = {
      animationEnabled: true,
      exportEnabled: true,
      theme: "dark2", // "light1", "dark1", "dark2"
      title: {
        text: "Trip Expenses"
      },
      data: [{
        type: "pie",
        indexLabel: "{label}: {y}%",
        startAngle: -90,
        dataPoints: [
          { y: 20, label: "Airfare" },
          { y: 24, label: "Food & Drinks" },
          { y: 20, label: "Accomodation" },
          { y: 14, label: "Transportation" },
          { y: 12, label: "Activities" },
          { y: 10, label: "Misc" }
        ]
      }]
    };



    return (
      <div id="Inventario" className="Inventarios ">
        <form>
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
                          </ul>
                          <div className="clearfix"></div>
                        </div>
                        <div className="x_content">

                          <p>Todos los productos necesarios que se requieren para donación en la {this.props.name} </p>
                          <button type="button" className="btn btn-info" onClick={this.openModal}>Estadisticas del Centro de donación</button>
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
        </form>


        <Modal isOpen={this.state.modalIsOpen} onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">

          <div className="col-md-4 col-sm-4 col-xs-12">
            <div className="x_panel">
              <div className="x_title">
                <ul className="nav navbar-right panel_toolbox">
                  <li><a className="close-link" onClick={this.closeModal}><i className="fa fa-close"></i></a></li>
                </ul>
                <div className="clearfix"></div>
              </div>
              <div id="modal" className="x_content">
                <h1 ref={subtitle => this.subtitle = subtitle}>Gráfica</h1>
                {/* <div>
                  <CanvasJSChart options={options}/>
                  
                </div> */}
              </div>
            </div>
          </div>
        </Modal>

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
