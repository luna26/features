import React, { Component, PropTypes } from 'react';
import {
  Alert,
  Image,
  Text,
  TouchableOpacity,
  View,
  ViewPropTypes
} from 'react-native';
import FingerprintScanner from 'react-native-fingerprint-scanner';


class FingerprintPopup extends Component {

  componentDidMount() {
    this.setFingerPrint();
  }

  setFingerPrint() {
    FingerprintScanner
      .authenticate({ onAttempt: this.handleAuthenticationAttempted })
      .then(() => {
        Alert.alert('Fingerprint Authentication', 'Authenticated successfully');
        forceUpdate.bind(this);
      })
      .catch((error) => {
        this.setState({ errorMessage: error.message });
      });
  }

  componentDidUpdate() {
    this.setFingerPrint();
  }

  componentWillUnmount() {
    FingerprintScanner.release();
  }

  handleAuthenticationAttempted = (error) => {
    Alert.alert('Fingerprint Authentication', 'Not Match');
  };

  render() {
    const { containerStyle } = styles;
    return (
      <View style={containerStyle}>
        <Text>Confirm Printfinger to continue</Text>
      </View>
    );
  }
}

styles = {
  containerStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default FingerprintPopup;