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
        console.log("Se abrió la ventana");
    }

    //cuando la ventana se cierra
    windowHasClosed() {
        console.log("Se Cerró la ventana");
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
                        title={'Título de la Universidad ICESI'}
                        name={'Universidad ICESI'}
                        direccion={"Carrera 1"}
                        position={{ lat: 3.341856, lng: -76.530804 }} />

                    <Marker
                        onMouseover={this.onMouseoverMarker}
                        onClick={this.onMarkerClick}
                        title={'Título de la Universidad del Valle'}
                        name={'Universidad del Valle'}
                        direccion={"Carrera 2"}
                        position={{ lat: 3.375579, lng: -76.534086 }} />

                    <Marker
                        onMouseover={this.onMouseoverMarker}
                        onClick={this.onMarkerClick}
                        title={'Título de la Universidad Santiago de Cali'}
                        name={'Universidad Santiago de Cali'}
                        direccion={"Carrera 3"}
                        position={{ lat: 3.402827, lng: -76.547116 }} />

                    <InfoWindow
                        onOpen={this.windowHasOpened}
                        onClose={this.windowHasClosed}
                        marker={this.state.activeMarker}
                        visible={this.state.showingInfoWindow}>
                        <div>
                            <h2>{this.state.selectedPlace.title}</h2>
                            <p>{this.state.selectedPlace.name} <br />
                                {this.state.selectedPlace.direccion}
                            </p>
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
