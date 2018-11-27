import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const MY_API_KEY = "AIzaSyAzwOeKC4njhutFl9TZ5MMXT19S5OKIgyw";
import Modal from 'react-modal';
import './mapa.css';


export class MapaItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nombreTmp: "",
            articulosTmp: "",
            direccionTmp: "",
            imagenTmp: "",
            latitudTmp: "",
            longitudTmp: "",
            descripcionTmp: "",
            showingInfoWindow: false,
            change: 5,
            activeMarker: {},
            selectedPlace: {},
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }


    //Cuando se hace click en el mapa llama a esta función
    onMapClicked(mapProps, map, clickEvent) {

        var latitud = clickEvent.latLng.lat();
        var longitud = clickEvent.latLng.lng();

        this.setState({
            latitudTmp: latitud,
            longitudTmp: longitud
        });

        //Aquí necesito abrir una ventana
        this.openModal();
        
        //Cierra la ventana abierta
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
         

    }

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    componentDidMount() {
        Modal.setAppElement('body');
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    closeModal() {
        this.setState({ modalIsOpen: false });
    }


    updateInput(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    //Para controlar la ventana de los marcadores
    estado = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };

    onLimpiar(e) {

        this.setState({
            nombreTmp: "",
            articulosTmp: "",
            direccionTmp: "",
            imagenTmp: "",
            latitudTmp: "",
            longitudTmp: "",
            descripcionTmp: "",
            showingInfoWindow: false,
        });
    }


    onGuardar(e) {

        this.closeModal();

        e.preventDefault();

        /**
        if (this.state.nombreTmp != "" && this.state.articulosTmp && "" && this.state.imagenTmp != ""
            && this.state.direccionTmp != "" && this.state.descripcionTmp != "")
 */

        if (this.state.nombreTmp != "" && this.state.articulosTmp != "" && this.state.imagenTmp != ""
            && this.state.direccionTmp != "" && this.state.descripcionTmp != "") {
            console.log("CAMPOS COMPLETOS")

            //Aquí se guarda
            var organizacion = {
                id: this.setState.change,
                nombre: this.state.nombreTmp,
                latitud: this.state.latitudTmp,
                longitud: this.state.longitudTmp,
                articulos: this.state.articulosTmp,
                img: this.state.imagenTmp,
                direccion: this.state.direccionTmp,
                descripcion: this.state.descripcionTmp,
                administrador: {},
                productos: {},
                donaciones: {},
            };

            console.log(organizacion)

            //this.props.listaOrganizaciones.push(organizacion);

            this.props.guardar(organizacion);

            this.setState({ change: this.state.change + 1 });

            this.onLimpiar();

        }
        else {
            console.log("CAMPOS IMCOMPLETOS")
        }



    }


    render() {

        const estiloMapa = {
            width: '100%',
            height: '100%',
        }

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


        //para la lista quemada
        var listaMarcadores = this.props.listaOrganizaciones.map(
            marcador => {

                return (
                    <Marker
                        onClick={this.onMarkerClick}
                        key={marcador.id}
                        id={marcador.id}
                        nombre={marcador.nombre_organizacion}
                        position={{ lat: marcador.latitud, lng: marcador.longitud }}
                        articulos={marcador.articulos}
                        img={marcador.img}
                        direccion={marcador.direccion}
                        descripcion={marcador.descripcion} />
                );
            }
        );

        return (
            <div>
                <div className="seccionMapa">
                    <Map
                        key="99"
                        id="99"
                        style={estiloMapa}
                        google={this.props.google}
                        initialCenter={{
                            lat: 3.423901,
                            lng: -76.522487
                        }}
                        zoom={13}
                        onClick={this.onMapClicked.bind(this)} >

                        {listaMarcadores}

                        <InfoWindow
                            onOpen={this.windowHasOpened}
                            onClose={this.windowHasClosed}
                            marker={this.state.activeMarker}
                            visible={this.state.showingInfoWindow}>

                            <div className="ventanaInfo">
                                <div className="ventanaInfoTitulo">
                                    <h3>{this.state.selectedPlace.nombre}</h3>
                                </div>

                                <div className="row">
                                    <div className="col">
                                        <div className="imgOrganizaciones">
                                            <img src={this.state.selectedPlace.img} />
                                        </div>
                                    </div>
                                    <div className="col">
                                        <h6 id="tituloArticulosDemanda">Artículos en demanda</h6>
                                        <div className="listaArticulosDemanda">
                                            <p>{this.state.selectedPlace.articulos}</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="direccion">
                                    <p>{this.state.selectedPlace.direccion}</p>
                                </div>

                                <div className="descripcion">
                                    <p>{this.state.selectedPlace.descripcion}</p>
                                </div>

                                <div id="btnRegistrar">
                                    <a href="/login" className="btn btn-primary" role="button">Registrar Donación</a>
                                </div>

                            </div>
                        </InfoWindow>
                    </Map>

                </div>


                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onAfterOpen={this.afterOpenModal}
                        onRequestClose={this.closeModal}
                        style={customStyles}
                        contentLabel="Example Modal">
                        <h2>Ingrese los datos de la organización</h2>

                        <form onSubmit={this.onGuardar.bind(this)}>
                            <div className="row">
                                <div className="col" id="campoIngresar">
                                    <output>Nombre: </output>
                                </div>
                                <div className="col" id="campoIngresar">
                                    <input type="text" name="nombreTmp" value={this.state.nombreTmp} onChange={this.updateInput.bind(this)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" id="campoIngresar">
                                    <output>Artículos: </output>
                                </div>
                                <div className="col" id="campoIngresar">
                                    <input type="text" name="articulosTmp" value={this.state.articulosTmp} onChange={this.updateInput.bind(this)} />
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col" id="campoIngresar">
                                    <output>Dirección: </output>
                                </div>
                                <div className="col" id="campoIngresar">
                                    <input type="text" name="direccionTmp" value={this.state.direccionTmp} onChange={this.updateInput.bind(this)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" id="campoIngresar">
                                    <output>Imagen: </output>
                                </div>
                                <div className="col" id="campoIngresar">
                                    <input type="text" name="imagenTmp" value={this.state.imagenTmp} onChange={this.updateInput.bind(this)} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col" id="campoIngresar">
                                    <output>Descripción del lugar: </output>
                                </div>
                                <div className="col" id="campoIngresar">
                                    <input type="text" name="descripcionTmp" value={this.state.descripcionTmp} onChange={this.updateInput.bind(this)} />
                                </div>
                            </div>

                            <div id="botonSubmit">
                                <button className="btn btn-primary">Guardar</button>
                            </div>
                        </form>

                    </Modal>
                </div>

            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: (MY_API_KEY)
})(MapaItem)
