import React, { Component } from 'react';
import Banner from '../components/Banner/Banner';
import Callto from '../components/Callto/Callto';
import Project from '../components/Project/Project';
import About from '../components/About/About';
import Volunteer from '../components/Volunteer/Volunteer';
import Donate from '../components/Donate/Donate';
import Footer from '../components/Footer/Footer';

import '../css/bootstrap.css';
import '../css/font-awesome.min.css';
import '../css/linearicons.css';
import '../css/magnific-popup.css';
import '../css/main.css';
import '../css/nice-select.css';
import '../css/owl.carousel.css';

export class App extends Component {
  render() {
    return (
      <div>
        <Banner></Banner>
        <Callto></Callto>
        <Project></Project>
        <About></About>
        <Volunteer></Volunteer>
        <Donate></Donate>
        <Footer></Footer>
      </div>
    )
  }
}

export default App
