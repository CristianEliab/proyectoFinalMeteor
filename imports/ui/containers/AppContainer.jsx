import React, { Component } from 'react';
import MainContainer from './MainContainer.jsx';

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = this.getMeteorData();
  }

  getMeteorData() {
    return { isAuthenticated: Meteor.userId() !== null };
  }

  componentWillMount() {
    this.props.history.push('/home');
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (!this.state.isAuthenticated) {
  //     this.props.history.push('/home');
  //   }
  // }

  render() {
    return (
      <div>
      </div>
    );
  }
}