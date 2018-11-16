import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx';
import MainContainer from '../../ui/containers/MainContainer.jsx';
import DonateContainer from '../../ui/containers/DonateContainer.jsx';
import InventarioContainer from '../../ui/containers/InventariosContainer.jsx';

// pages
import SignupPage from '../../ui/pages/SignupPage.jsx';
import LoginPage from '../../ui/pages/LoginPage.jsx';
import DonarPage from '../../ui/pages/DonarPage.jsx';
import MainPage from '../../ui/pages/MainPage.jsx';


export class Routes extends Component {

  logout(e) {
    e.preventDefault();
    Meteor.logout((err) => {
      if (err) {
        console.log(err.reason);
      } else {
        this.props.history.push('/login');
      }
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Route path="/home" component={MainContainer} />
          <Route path="/donar" component={DonateContainer} />
          <Route path="/inventario" component={InventarioContainer} />
          <Route exact={true} path="/" component={AppContainer} />
        </div>
      </Router>
    )
  }
}

export default Routes