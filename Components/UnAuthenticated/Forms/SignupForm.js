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
  </View>
);

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
  if (!values.fullName) {
    errors.fullName = 'Required field';
  } else if (values.fullName.length < 3) {
    errors.fullName = 'Atleast 3 characters';
  } else if (values.fullName.length > 12) {
    errors.fullName = 'At most 12 characters';
  }

  if (!values.email) {
    errors.email = 'Required field';
  } else if (!emailRegexp.test(values.email)) {
    errors.email = 'Invalid E-mail';
  }

  if (!values.password) {
    errors.password = 'Required field';
  } else if (values.password.length < 5) {
    errors.password = 'Atleast 5 characters';
  } else if (values.password.length > 15) {
    errors.password = 'At most 15 characters';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Required field';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = 'Confirm password different from password';
  }
  return errors;
};

const SignupForm = props => (
  <View>
    <Field placeholderText="Full Name" name="fullName" component={FieldName} />
    <Field placeholderText="E-mail" name="email" component={FieldName} />
    <Field placeholderText="Password" name="password" component={FieldName} />
    <Field placeholderText="Confirm Password" name="confirmPassword" component={FieldName} />
    <Button
      onPress={props.handleSubmit(props.register)}
      title="Submit"
    />
  </View>
);

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'SignupForm',
  validate
})(SignupForm);

const styles = StyleSheet.create({
  field: {
    color: 'black',
    alignItems: 'center',
    padding: 12,
    marginLeft: 15,
    marginTop: 20,
    marginRight: 15,
    width: 250,
    backgroundColor: '#FACCF8',
    borderRadius: 20
  },
  error: {
    color: 'red',
    marginLeft: 15,
    alignItems: 'center',
  }
});
