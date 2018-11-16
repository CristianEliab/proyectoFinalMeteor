import { withTracker } from 'meteor/react-meteor-data';
import DonatePage from '../pages/DonarPage.jsx'

export default withTracker(props => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(DonatePage);