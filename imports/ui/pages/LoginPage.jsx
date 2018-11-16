import React, { Component } from 'react'
import { withHistory, Link } from 'react-router-dom'
import { createContainer } from 'meteor/react-meteor-data'

import './loginPage.css';


export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let email = document.getElementById('login-email').value;
    let password = document.getElementById('login-password').value;
    Meteor.loginWithPassword(email, password, (err) => {
      if (err) {
        this.setState({
          error: err.reason
        });
      } else {
        this.props.history.push('/inventario');
      }
    });
  }

  render() {
    const error = this.state.error;
    return (
      <div className="Login">

       <header className="default-header">
          <div className="container">
            <div className="header-wrap">
              <div className="header-top d-flex justify-content-between align-items-center">
                <div className="logo">
                  <a href="/home"><img src="./logoV.png" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="modal show loginPage">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="text-center">Login</h1>
              </div>
              <div className="modal-body">
                {error.length > 0 ?
                  <div className="alert alert-danger fade in">{error}</div>
                  : ''}
                <form id="login-form"
                  className="form col-md-12 center-block"
                  onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <input type="email"
                      id="login-email"
                      className="form-control input-lg"
                      placeholder="email" />
                  </div>
                  <div className="form-group">
                    <input type="password"
                      id="login-password"
                      className="form-control input-lg"
                      placeholder="password" />
                  </div>
                  <div className="form-group text-center">
                    <input type="submit"
                      id="login-button"
                      className="btn btn-primary btn-lg btn-block"
                      value="Login" />
                  </div>
                  <div className="form-group text-center">
                    <p className="text-center">
                      Don't have an account? Register <Link to="/signup">here</Link>
                    </p>
                  </div>
                </form>
              </div>
              <div className="modal-footer" style={{ borderTop: 0 }}></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}