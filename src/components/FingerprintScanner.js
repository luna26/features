import React, { Component, PropTypes } from 'react';
import { Alert, TouchableOpacity, View, Text } from 'react-native';
import * as actions from '../actions';
import { connect } from 'react-redux';
import FingerprintScanner from 'react-native-fingerprint-scanner';


class FingerprintPopup extends Component {

  componentDidMount() {
    FingerprintScanner
    .authenticate({ onAttempt: this.handleAuthenticationAttempted })
    .then(() => {
      this.props.accessFinger(true);
    })
    .catch((error) => {

    });
  }

  componentWillUnmount() {
    FingerprintScanner.release();
  }

  handleAuthenticationAttempted = (error) => {
    this.props.accessFinger(false); 
  }

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text>Confirm Print finger to continue!!</Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

const mapStateToProps = state => {
  return {
    accessFinger: state.accessFinger
  };
};

export default connect(mapStateToProps, actions)(FingerprintPopup);