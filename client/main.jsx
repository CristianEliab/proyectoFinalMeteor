import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

// add render routes function
import Routes  from '../imports/startup/client/routes.jsx'

import './main.html';

// render routes after DOM has loaded
Meteor.startup(() => {
  render(<Routes></Routes>, document.getElementById('target'));
});