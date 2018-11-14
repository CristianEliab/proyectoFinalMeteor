import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// containers
import AppContainer from '../../ui/containers/AppContainer.jsx';
import MainContainer from '../../ui/containers/MainContainer.jsx';
import DonateContainer from '../../ui/containers/DonateContainer.jsx';

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
          <header className="default-header">
            <div className="container">
              <div className="header-wrap">
                <div className="header-top d-flex justify-content-between align-items-center">
                  <div className="logo">
                    <a href="#home"><img src="./logoV.png" alt="" /></a>
                  </div>
                  <div className="main-menubar d-flex align-items-center">
                    <nav className="hide">
                      <a href="/home" >Inicio</a>
                      <a href="/donar" >Quiero Donar</a>
                    </nav>
                    <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Route path="/home" component={MainContainer} />
          <Route path="/donar" component={DonateContainer} />
          <Route exact={true} path="/" component={AppContainer} />
        </div>
      </Router>
    )
  }
}

export default Routes