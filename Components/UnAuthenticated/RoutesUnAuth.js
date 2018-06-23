import { StackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import { SignUp } from './SignUp';

const RoutesUnAuth = StackNavigator({
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn
  }
});

export default RoutesUnAuth;
