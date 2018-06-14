import React from 'react';
import { Text } from 'react-native';
import { StackNavigator } from 'react-navigation';

const SignIn = (props) => {
  console.log('props', props);
  return <Text>Component Signin</Text>;
};

const SignUp = () => <Text>Component Signup</Text>;

const RoutesWrongAuth = StackNavigator({
  SignIn: {
    screen: SignIn
  },
  SignUp: {
    screen: SignUp
  }
});

export { RoutesWrongAuth };
