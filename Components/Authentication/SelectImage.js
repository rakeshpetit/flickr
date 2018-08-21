import React, { Component } from 'react';
import { Image, TouchableOpacity, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import tempImage from '../../assets/sunflower.jpg';

export class SelectImage extends Component {
  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.props.select}>
          {this.props.source ? (
            <Image source={this.props.source} style={styles.imageContainer} />
          ) : (
            <Image
              source={tempImage}
              style={styles.imageContainer}
            />
          )}
        </TouchableOpacity>
      </View>
    );
  }
}

SelectImage.propTypes = {
  source: PropTypes.object.isRequired,
  select: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 100,
    width: 200,
    height: 200,
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey'
  }
});

export default SelectImage;
