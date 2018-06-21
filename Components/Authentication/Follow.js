import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Follow extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Follow</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  }
});

export default Follow;
