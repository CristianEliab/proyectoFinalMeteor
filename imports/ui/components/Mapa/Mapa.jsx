import React, { Component } from 'react'
import { Colleccion } from '../../../api/Collections';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import MapaItem from './MapaItem';

export class Mapa extends Component {

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
        };
    }


    handleGuardar(organizacion) {
        organizacion._id = Math.random().toString(36).substring(2, 9);
        //Collection
        Meteor.call('organizacion.insert', organizacion);
    }

    render() {
        console.log(this.props.infoMarcadores);
        var listaMarcadores = this.props.infoMarcadores.map(
            marcador => {
                console.log(marcador.nombre_organizacion);
                console.log(marcador.longitud);
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
                    <MapaItem listaOrganizaciones={listaMarcadores} guardar={this.handleGuardar.bind(this)} ></MapaItem>
                </div>
            </div>
        );
    }
}


export default withTracker(() => {
    Meteor.subscribe('organizaciones');
    return {
        infoMarcadores: Colleccion.find({}).fetch(),
    };
})(Mapa);
