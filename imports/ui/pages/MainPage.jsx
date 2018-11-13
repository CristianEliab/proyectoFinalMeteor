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
    let currentUser = this.props.currentUser;
    let userDataAvailable = (currentUser !== undefined);
    let loggedIn = (currentUser && userDataAvailable);
    return (
      <div>
        <div className="container">
          <h1 className="text-center">
            {loggedIn ? 'Welcome ' + currentUser.username : ''}
            <App></App>
          </h1>
        </div>
      </div>
    );
  }
}

MainPage.propTypes = {
  //username: React.PropTypes.string
}
