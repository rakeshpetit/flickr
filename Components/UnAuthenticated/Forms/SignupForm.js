import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';

const FieldName = props => (
  <TextInput
    placeholder={props.placeholderText}
    onChangeText={props.input.onChange}
    value={props.input.value}
    keyboardType={props.input.name === 'email' ? 'email-address' : 'default'}
    autoCapitalize="none"
    secureTextEntry={(props.input.name === 'password' || props.input.name === 'confirmPassword')}
  />
);

FieldName.propTypes = {
  placeholderText: PropTypes.string.isRequired,
  input: PropTypes.object.isRequired
};

const SignupForm = (props) => {
  console.log(props);
  return (
    <View>
      <Text>Redux form sample</Text>
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

export default reduxForm({ form: 'SignupForm' })(SignupForm);
