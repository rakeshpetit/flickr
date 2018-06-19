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
    screen: Comments,
    navigationOptions: {
      tabBarVisible: false
    }
  },
});

export default StackHome;
