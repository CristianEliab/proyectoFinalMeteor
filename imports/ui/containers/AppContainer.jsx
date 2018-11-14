import React, { Component } from 'react';
import MainContainer from './MainContainer.jsx';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
    this.logout = this.logout.bind(this);
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount() {
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (!this.state.isAuthenticated) {
      this.props.history.push('/login');
    }
  }

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
      <div>
        <header className="default-header">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="#home"><img src="./logo.png" alt="" /></a>
                </div>
                <div className="main-menubar d-flex align-items-center">
                  <nav className="hide">
                    <a href="#home">Home</a>
                    <a href="#project">Projects</a>
                    <a href="#about">About</a>
                    <a href="#donate">Donate</a>
                    <a href="#" onClick={this.logout}>Logout</a>
                  </nav>
                  <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <MainContainer />
      </div>
    );
  }
}