import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { newAction, register, saveImageCloud } from '../../actions';
import SignupForm from './Forms/SignupForm';
import { SelectImage } from '../Authentication/SelectImage';
// var ImagePicker = require('react-native-image-picker');

var options = {
  title: 'Select Avatar',
  customButtons: [
    { name: 'fb', title: 'Choose Photo from Facebook' },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class SignUpPure extends Component {
  state = { avatarSource: null };
  registerUser = (values) => {
    console.log('this.state.avatarSource', this.state.avatarSource);
    if (this.state.avatarSource !== null && this.state.avatarSource !== undefined) {
      this.props.saveImageCloud(this.state.avatarSource);
      this.props.register(values);
    }
  }

  openGallery = () => {
    ImagePicker.showImagePicker(options, (response) => {    
      if (response.didCancel) {
        console.log('User cancelled image picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        console.log('response', response);
        const source = { uri: response.uri, data: response.data };
        this.setState({
          avatarSource: source
        });
      }
    });
  } ;

  render() {
    const { navigation } = this.props;
    const uri = this.state.avatarSource ? this.state.avatarSource : null;
    return (
      <View style={styles.container}>
        <SelectImage source={uri} select={this.openGallery} />
        <SignupForm register={this.registerUser} />
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
  register: PropTypes.func.isRequired,
  saveImageCloud: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    number: state.allReducers
  };
}

const actionsToProps = {
  newAction,
  register,
  saveImageCloud
};

const SignUp = connect(mapStateToProps, actionsToProps)(SignUpPure);

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});
