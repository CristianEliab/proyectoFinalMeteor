import React, { Component } from 'react';
import { withHistory, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from '../components/App';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    };
  }

  render() {
    // let currentUser = this.props.currentUser;
    // let userDataAvailable = (currentUser !== undefined);
    // let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <header className="default-header">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="/home"><img src="./logoV.png" alt="" /></a>
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
        <App></App>
      </div>
    );
  }
}

MainPage.propTypes = {
  //username: React.PropTypes.string
}
