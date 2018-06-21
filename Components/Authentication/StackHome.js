import { StackNavigator } from 'react-navigation';
import Home from './Home';
import Author from './Profile';
import Posts from './Posts';
import Comments from './Comments';

const StackHome = StackNavigator({
  Home: {
    screen: Home
  },
  Author: {
    screen: Author
  },
  Posts: {
    screen: Posts
  },
  Comments: {
    screen: Comments
  },
});

StackHome.navigationOptions = ({ navigation }) => {
  const { routeName } = navigation.state.routes[navigation.state.index];
  const navigationOptions = {};
  if (routeName === 'Comments') {
    navigationOptions.tabBarVisible = false;
  }
  return navigationOptions;
};

export default StackHome;
