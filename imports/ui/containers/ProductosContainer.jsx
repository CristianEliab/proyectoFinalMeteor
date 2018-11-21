import { withTracker } from 'meteor/react-meteor-data';
import ProductosPage from '../pages/ProductosPage.jsx'

export default withTracker(props => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
})(ProductosPage);