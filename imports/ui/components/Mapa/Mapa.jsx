import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './mapa.css';
const MY_API_KEY = "AIzaSyBioI0V6qQMOQMdNzbbB6rmCAU4rWWpzmo";



export class Mapa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            change: 1, 
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
            ]
        };
    }


    //Cuando se hace click en el mapa llama a esta función
    onMapClicked(mapProps, map, clickEvent) {

        var latitud = clickEvent.latLng.lat();
        var longitud = clickEvent.latLng.lng();

        console.log("latitud " + latitud);
        console.log("longitud " + longitud);
        
        //Aquí agrego un nuevo marcador
        var marcador = {
            "id": 4,
            "nombre": "Arquidiócesis de Cali",
            "latitud": latitud,
            "longitud": longitud,
            "articulos": "NUEVO NUEVO NUEVO",
            "img": "./arquidiocesis.jpg",
            "direccion": "DIRECCIÓN NUEVA"
        }

        this.state.infoMarcadores.push(marcador);
        this.setState({change: this.state.change++});
        console.log(this.state);
    }
    /**
    //Cuando se hace click en el marcador llama a esta función
    onMarkerClick(props, marker, e) {
      console.log(marker.name);
    }
    
    //Cuando se hace pasa el mouse sobre el marcador llama a esta función
    onMouseoverMarker(props, marker, e) {
      console.log(marker.name);
    }
    */

    //Para controlar la ventana de los marcadores
    estado = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {},
    };
    /**
        //Cuando da click en el mapa se cierra la ventana
        onMapClicked = (props) => {
            if (this.state.showingInfoWindow) {
                this.setState({
                    showingInfoWindow: false,
                    activeMarker: null
                })
            }
        };
     */
    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    //Cuando la ventana se abre
    windowHasOpened() {

    }

    //cuando la ventana se cierra
    windowHasClosed() {

    }




    render() {

        const estiloMapa = {
            width: '100%',
            height: '100%',
        }




      var  listaMarcadores = this.state.infoMarcadores.map(
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
            <div className="seccionMapa">

                <Map
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
        )
    }
}

export default GoogleApiWrapper({
    apiKey: (MY_API_KEY)
})(Mapa)
