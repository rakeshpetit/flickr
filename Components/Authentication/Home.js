import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

class Home extends Component {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Home</Text>
        <Button
          onPress={() => {
          navigation.navigate('Author');
        }}
          title="Author"
        />
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

Home.propTypes = {
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

export default Home;
