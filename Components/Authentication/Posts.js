import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Posts extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Posts</Text>
        <Button
          onPress={() => {
          navigation.navigate('Comments');
        }}
          title="Comments"
        />
      </View>
    );
  }
}

Posts.propTypes = {
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

export default Posts;
