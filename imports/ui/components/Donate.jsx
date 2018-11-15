import React, { Component } from 'react'
import Banner from '../components/Banner/Banner';
import Callto from '../components/Callto/Callto';
import Footer from '../components/Footer/Footer';
import Mapa from './Mapa/Mapa';

import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/linearicons.css';
import '../css/magnific-popup.css';
import '../css/main.css';
import '../css/nice-select.css';
import '../css/owl.carousel.css';

export class Donate extends Component {
  render() {
    return (
      <div>
        <Mapa></Mapa>
        <Footer></Footer>
      </div>
    )
  }
}

export default Donate
