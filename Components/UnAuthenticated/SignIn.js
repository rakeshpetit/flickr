import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import SigninForm from './Forms/SigninForm';


class SignIn extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Sign In</Text>
        <SigninForm />
        <Button
          onPress={() => {
          navigation.goBack();
        }}
          title="Back"
        />
      </View>
    );
  }
}

SignIn.propTypes = {
  navigation: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default SignIn;
