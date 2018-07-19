import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RoutesUnAuth from '../UnAuthenticated/RoutesUnAuth';
import RoutesAuth from '../Authentication/RoutesAuth';
import { createSession, clearSession } from '../../actions';
import { authenticate } from '../../Store/Firebase';

class DivertFlowPure extends Component {
  componentDidMount() {
    this.checkSessionStatus();
  }

  checkSessionStatus = () => {
    authenticate.onAuthStateChanged((user) => {
      if (user) {
        this.props.createSession(user);
      } else {
        this.props.clearSession();
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        {this.props.users ? <RoutesAuth /> : <RoutesUnAuth />}
      </View>
    );
  }
}

DivertFlowPure.propTypes = {
  users: PropTypes.object.isRequired,
  createSession: PropTypes.func.isRequired,
  clearSession: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.allReducers.session
  };
}

const actionsToProps = {
  createSession,
  clearSession
};

const DivertFlow = connect(mapStateToProps, actionsToProps)(DivertFlowPure);

export default DivertFlow;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  }
});
