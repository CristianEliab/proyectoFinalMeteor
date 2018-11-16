import { withTracker } from 'meteor/react-meteor-data';
import MainPage from '../pages/MainPage.jsx'

export default withTracker(props => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(MainPage);