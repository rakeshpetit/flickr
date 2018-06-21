import { StackNavigator } from 'react-navigation';
import TabFollow from './TabFollow';
import Author from './Profile';
import Posts from './Posts';
import Comments from './Comments';

const StackFollow = StackNavigator({
  TabFollow: {
    screen: TabFollow,
    navigationOptions: {
      header: null
    }
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

export default StackFollow;
