import { TabNavigator } from 'react-navigation';
import StackHome from './StackHome';
import StackSearch from './StackSearch';
import Add from './Add';
import StackFollow from './StackFollow';
import Profile from './Profile';

const RoutesAuth = TabNavigator(
  {
    Home: {
      screen: StackHome
    },
    Search: {
      screen: StackSearch
    },
    Add: {
      screen: Add
    },
    Follow: {
      screen: StackFollow
    },
    Profile: {
      screen: Profile
    },
  },
  {
    tabBarPosition: 'bottom'
  }
);

export default RoutesAuth;
