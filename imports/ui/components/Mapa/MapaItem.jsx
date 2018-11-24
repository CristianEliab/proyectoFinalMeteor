import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
const MY_API_KEY = "AIzaSyBioI0V6qQMOQMdNzbbB6rmCAU4rWWpzmo";
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
            showingInfoWindow: false,
            change: 5,
            activeMarker: {},
            selectedPlace: {},
            infoMarcadores: [
                {
                    "id": 1,
                    "nombre": "Cruz Roja Colombiana Cali",
                    "latitud": "3.427135",
                    "longitud": "-76.545069",
                    "articulos": "Lenteja, Harina de Maíz, Arroz, Azúcar, Frijol.",
                    "img": "./cruzroja.jpg",
                    "direccion": "Cra. 38 Bis #5-91, Cali, Valle del Cauca"

                },
                {
                    "id": 2,
                    "nombre": "Banco de Alimentos Cali",
                    "latitud": "3.454441",
                    "longitud": "-76.520135",
                    "articulos": "Sal, Panela, Café, Chocolate, Aceite.",
                    "img": "./bancodealimentos.jpg",
                    "direccion": "Cl. 24 #6-103, Cali, Valle del Cauca"
                },
                {
                    "id": 3,
                    "nombre": "Arquidiócesis de Cali",
                    "latitud": "3.450946",
                    "longitud": "-76.535900",
                    "articulos": "Leche en polvo, Bocadillo, Pasta, Atún.",
                    "img": "./arquidiocesis.jpg",
                    "direccion": "Cra. 4 #7-17, Cali, Valle del Cauca"
                }
            ],
            infoOrganizaciones: this.props.listaOrganizaciones,
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


        //Aquí agrego un nuevo marcador
        /**
        var marcador = {
            "id": this.setState.change,
            "nombre": "Arquidiócesis de Cali",
            "latitud": latitud,
            "longitud": longitud,
            "articulos": "NUEVO NUEVO NUEVO",
            "img": "./arquidiocesis.jpg",
            "direccion": "DIRECCIÓN NUEVA"
        }
         
        //OTRA FORMA DE AGREGAR
        //var tmp = this.state.infoMarcadores;
        //tmp.push(marcador);
        // this.setState({infoMarcadores: tmp});
        this.state.infoMarcadores.push(marcador);
        this.setState({ change: this.state.change + 1 });
        console.log(this.state);
        */

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


    onGuardar(e) {
        //Aquí se guarda
        var organizacion = {
            id: 99,
            nombre: this.state.nombreTmp,
            latitud: this.state.latitudTmp,
            longitud: this.state.longitudTmp,
            articulos: this.state.articulosTmp,
            img: this.setState.imagenTmp,
            direccion: this.state.direccionTmp
        };
        e.preventDefault();
        this.props.guardar(organizacion);
        this.setState({
            id: "",
            nombre: "",
            latitud: "",
            longitud: "",
            articulos: "",
            img: "",
            direccion: ""
        });

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


        var listaMarcadores = this.state.infoMarcadores.map(
            marcador => {

                return (
                    <Marker
                        key={marcador.id}
                        onMouseover={this.onMouseoverMarker}
                        onClick={this.onMarkerClick}
                        position={{ lat: marcador.latitud, lng: marcador.longitud }}
                        nombre={marcador.nombre}
                        articulos={marcador.articulos}
                        img={marcador.img}
                        direccion={marcador.direccion} />
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
                    <form>
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
                        <div id="botonSubmit">
                            <button className="btn btn-primary" onSubmit={this.onGuardar.bind(this)} >Guardar</button>
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
