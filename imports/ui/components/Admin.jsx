import React, { Component } from 'react'
import Footer from './Footer/Footer';
import MapaAdmin from './Mapa/MapaAdmin';

import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/linearicons.css';
import '../css/magnific-popup.css';
import '../css/main.css';
import '../css/nice-select.css';
import '../css/owl.carousel.css';

export class Admin extends Component {
  render() {
    return (
      <div>
        <MapaAdmin></MapaAdmin>
        <Footer></Footer>
      </div>
    )
  }
}

export default Admin
