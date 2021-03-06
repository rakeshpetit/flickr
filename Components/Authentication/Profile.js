import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { authenticate } from '../../Store/Firebase';

class Profile extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Profile</Text>
        <Button
          onPress={() => {
          navigation.navigate('Posts');
        }}
          title="Posts"
        />
        <Button
          onPress={() => {
          authenticate.signOut();
        }}
          title="Log Out"
        />
      </View>
    );
  }
}

Profile.propTypes = {
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

export default Profile;
