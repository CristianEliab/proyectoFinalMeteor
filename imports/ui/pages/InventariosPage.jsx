import React, { Component } from 'react';
import Inventarios from '../components/Inventarios/Inventarios';

export class InventariosPage extends Component {

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

    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);

    console.log(currentUser);

    return (
      <div>
        <header className="default-header">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="#" onClick={this.logout}><img src="./logoV.png" alt="" /></a>
                </div>
                <div className="main-menubar d-flex align-items-center">
                  <nav className="hide">
                    <a href="#" onClick={this.logout}>Logout</a>
                  </nav>
                  <div className="menu-bar"><span className="lnr lnr-menu"></span></div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <Inventarios  name={loggedIn ? 'Organización ' + currentUser.username : ''}></Inventarios>
      </div>
    )
  }
}

export default InventariosPage
