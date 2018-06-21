import { StackNavigator } from 'react-navigation';
import Search from './Search';
import Author from './Profile';
import Posts from './Posts';
import Comments from './Comments';

const StackSearch = StackNavigator({
  Search: {
    screen: Search
  },
  Posts: {
    screen: Posts
  },
  Author: {
    screen: Author
  },
  Comments: {
    screen: Comments
  },
});

export default StackSearch;
