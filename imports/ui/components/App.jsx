import React, { Component } from 'react';
import Header from '../components/Header/Header';
import Banner from '../components/Banner/Banner';
import Callto from '../components/Callto/Callto';
import Project from '../components/Project/Project';
import About from '../components/About/About';
import Volunteer from '../components/Volunteer/Volunteer';
import Donate from '../components/Donate/Donate';
import Footer from '../components/Footer/Footer';

export class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
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
