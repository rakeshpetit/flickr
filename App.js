import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import DivertFlow from './Components/FlowSelect/DivertFlow';
import Store from './Store/Store';

console.disableYellowBox = ['Remote debugger'];
export default class App extends Component {
  constructor() {
    super();
    this.state = { };
  }
  render() {
    return (
      <View style={styles.container}>
        <Provider store={Store}>
          <DivertFlow />
        </Provider>
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
