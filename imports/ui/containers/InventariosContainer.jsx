import { withTracker } from 'meteor/react-meteor-data';
import InventariosPage from '../pages/InventariosPage.jsx'

export default withTracker(props => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(InventariosPage);