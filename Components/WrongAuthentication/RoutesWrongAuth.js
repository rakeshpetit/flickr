import React from 'react';
import { View, Button, Text } from 'react-native';
import PropTypes from 'prop-types';
import { StackNavigator } from 'react-navigation';

const SignIn = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Component Signin</Text>
      <Button
        onPress={() => {
        navigation.navigate('SignUp');
      }}
        title="Go back"
      />
    </View>
  );
};

SignIn.propTypes = {
  navigation: PropTypes.func.isRequired
};

const SignUp = (props) => {
  const { navigation } = props;
  return (
    <View>
      <Text>Component Signup</Text>
      <Button
        onPress={() => {
        navigation.navigate('SignIn');
      }}
        title="Sign in"
      />
    </View>
  );
};

SignUp.propTypes = {
  navigation: PropTypes.func.isRequired
};

const RoutesWrongAuth = StackNavigator({
  SignUp: {
    screen: SignUp
  },
  SignIn: {
    screen: SignIn
  }
});

export { RoutesWrongAuth };
