import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const FieldName = (props) => {
  console.log(props);
  return (
    <View>
      <TextInput
        placeholder={props.placeholderText}
        onChangeText={props.input.onChange}
        onBlur={props.input.onBlur}
        value={props.input.value}
        keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
        autoCapitalize="none"
        secureTextEntry={(props.input.name === 'password' || props.input.name === 'confirmPassword')}
      />
      {props.meta.touched && props.meta.error &&
        <Text>{props.meta.error}</Text>}
    </View>
  );
};

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

const SignupForm = (props) => {
  console.log(props);
  return (
    <View>
      <Text>Signup Form</Text>
      <Field placeholderText="Full Name" name="fullName" component={FieldName} />
      <Field placeholderText="E-mail" name="email" component={FieldName} />
      <Field placeholderText="Password" name="password" component={FieldName} />
      <Field placeholderText="Confirm Password" name="confirmPassword" component={FieldName} />
      <Button
        onPress={props.handleSubmit((values) => {
          console.log(values);
        })}
        title="Submit"
      />
    </View>
  );
};

SignupForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'SignupForm',
  validate
})(SignupForm);
