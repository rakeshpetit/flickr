import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const FieldName = props => (
  <View>
    <TextInput
      style={styles.field}
      placeholder={props.placeholderText}
      onChangeText={props.input.onChange}
      onBlur={props.input.onBlur}
      value={props.input.value}
      keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
      autoCapitalize="none"
      secureTextEntry={(props.input.name === 'password' || props.input.name === 'confirmPassword')}
    />
    {props.meta.touched && props.meta.error &&
      <Text style={styles.error}>{props.meta.error}</Text>}
  </View>);

FieldName.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired
};

const validate = (values) => {
  const errors = {};
  /* eslint-disable */
  const emailRegexp = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  /* eslint-enable */
  if (!values.email) {
    errors.email = 'Required field';
  } else if (!emailRegexp.test(values.email)) {
    errors.email = 'Invalid E-mail';
  }

  if (!values.password) {
    errors.password = 'Required field';
  } else if (values.password.length < 5 || values.password.length > 15) {
    errors.password = 'Wrong password';
  }

  return errors;
};

const SigninForm = (props) => {
  console.log(props);
  return (
    <View>
      <Text>Signin Form</Text>
      <Field placeholderText="E-mail" name="email" component={FieldName} />
      <Field placeholderText="Password" name="password" component={FieldName} />
      <Button
        onPress={props.handleSubmit(props.login)}
        title="Submit"
      />
    </View>
  );
};

SigninForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'SigninForm',
  validate
})(SigninForm);

const styles = StyleSheet.create({
  field: {
    color: 'white',
    alignItems: 'center',
    padding: 10,
    margin: 10,
    width: 150,
    backgroundColor: 'gray',
    borderRadius: 20
  },
  error: {
    color: 'red',
    margin: 10,
    alignItems: 'center',
  }
});
