import React, { Component } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { newAction } from '../../actions';
import SignupForm from './Forms/SignupForm';

class SignUpPure extends Component {
  render() {
    console.log('props', this.props.number);
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <SignupForm />
        <Button
          onPress={this.props.newAction}
          title="Action"
        />
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

SignUpPure.propTypes = {
  navigation: PropTypes.func.isRequired,
  newAction: PropTypes.func.isRequired,
  number: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    number: state.allReducers
  };
}

const actionsToProps = {
  newAction
};

export const SignUp = connect(mapStateToProps, actionsToProps)(SignUpPure);

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
