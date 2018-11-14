import { createContainer } from 'meteor/react-meteor-data';
import DonatePage from '../pages/DonarPage.jsx'

export default MainContainer = createContainer(({params}) => {
  const currentUser = Meteor.user();
  return {
    currentUser,
  };
}, DonatePage);