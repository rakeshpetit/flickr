import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class SignUp extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Sign Up</Text>
        <Button
          onPress={() => {
          navigation.navigate('SignIn');
        }}
          title="Sign In"
        />
      </View>
    );
  }
}

SignUp.propTypes = {
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

export default SignUp;
