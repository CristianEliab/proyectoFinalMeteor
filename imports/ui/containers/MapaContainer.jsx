import { withTracker } from 'meteor/react-meteor-data';
import MapaPage from '../pages/MapaPage.jsx'

export default withTracker(props => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(MapaPage);