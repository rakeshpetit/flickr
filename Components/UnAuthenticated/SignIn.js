import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SigninForm from './Forms/SigninForm';
import { login } from '../../actions';

class SignInPure extends Component {
  loginUser = (values) => {
    this.props.login(values);
    console.log('loginUser', values);
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SigninForm login={this.loginUser} />
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

SignInPure.propTypes = {
  login: PropTypes.func.isRequired,
  navigation: PropTypes.func.isRequired
};

const actionsToProps = {
  login
};

export const SignIn = connect(null, actionsToProps)(SignInPure);

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
