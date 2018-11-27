import React, { Component } from 'react'
import { Colleccion } from '../../../api/Collections';
import { Meteor } from 'meteor/meteor';
import { withTracker } from 'meteor/react-meteor-data';
import MapaItem from './MapaAdminItem';

export class MapaAdmin extends Component {

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
        Meteor.call('organizaciones.insert', organizacion);
    }

    render() {
        return (            
            <div>
                <div className="seccionMapa">
                    <MapaItem listaOrganizaciones={this.props.infoMarcadores} guardar={this.handleGuardar.bind(this)} ></MapaItem>
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
})(MapaAdmin);
