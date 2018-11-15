import { createContainer } from 'meteor/react-meteor-data';
import InventariosPage from '../pages/InventariosPage.jsx'

export default InventariosContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
}, InventariosPage);