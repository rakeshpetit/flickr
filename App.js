import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { RoutesWrongAuth } from './Components/WrongAuthentication/RoutesWrongAuth';

export default class App extends Component {
  constructor() {
    super();
    this.state = { };
  }
  render() {
    return (
      <View style={styles.container}>
        <RoutesWrongAuth />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
