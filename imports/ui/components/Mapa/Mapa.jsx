import React, { Component } from 'react'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const MY_API_KEY = "AIzaSyBioI0V6qQMOQMdNzbbB6rmCAU4rWWpzmo";

import './mapa.css';

const estiloMapa = {
    width: '100%',
    height: '100%',
}

export class Mapa extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showingInfoWindow: false,
            activeMarker: {},
            selectedPlace: {},
        };
    }

    /** 
//Cuando se hace click en el mapa llama a esta función
onMapClicked(mapProps, map, clickEvent) {
  console.log("latitud " + mapProps.lat);
  console.log("longitud " + mapProps.lat);
}

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

    //Cuando da click en el mapa se cierra la ventana
    onMapClicked = (props) => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            })
        }
    };

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
                    onClick={this.onMapClicked} >

                    <Marker
                        onMouseover={this.onMouseoverMarker}
                        onClick={this.onMarkerClick}
                        data2={['data1', 'data2', 'data3']}
                        data="Lenteja, Harina de Maíz, Arroz, Azúcar, Frijol."
                        img={'./cruzroja.jpg'}
                        name={'Cruz Roja Colombiana Cali'}
                        direccion={"Cra. 38 Bis #5-91, Cali, Valle del Cauca"}
                        position={{ lat: 3.427135, lng: -76.545069 }} />

                    <Marker
                        onMouseover={this.onMouseoverMarker}
                        onClick={this.onMarkerClick}
                        //data={['data1', 'data2', 'data3']}
                        data="Sal, Panela, Café, Chocolate, Aceite."
                        img={'./bancodealimentos.jpg'}
                        name={'Banco de Alimentos Cali'}
                        direccion={"Cl. 24 #6-103, Cali, Valle del Cauca"}
                        position={{ lat: 3.454441, lng: -76.520135 }} />

                    <Marker
                        onMouseover={this.onMouseoverMarker}
                        onClick={this.onMarkerClick}
                        //data={['data1', 'data2', 'data3']}
                        data="Leche en polvo, Bocadillo, Pasta, Atún."
                        img={'./arquidiocesis.jpg'}
                        name={'Arquidiócesis de Cali'}
                        direccion={"Cra. 4 #7-17, Cali, Valle del Cauca"}
                        position={{ lat: 3.450946, lng: -76.535900 }} />

                    <InfoWindow
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>

                        <div className="ventanaInfo">

                            <div className="ventanaInfoTitulo">
                                <h3>{this.state.selectedPlace.name}</h3>
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
                                        <p>{this.state.selectedPlace.data}</p>
                                        <p>{this.state.selectedPlace.data2}</p>
                                    </div>
                                </div>

                            </div>

                            <div className="direccion">
                                <p>{this.state.selectedPlace.direccion}</p>
                            </div>
                            <div id="btnRegistrar">
                                <a href="/inventario" className="btn btn-primary" role="button">Registrar Donación</a>
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
