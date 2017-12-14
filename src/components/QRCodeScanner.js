import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  NavigatorIOS,
  TouchableOpacity,
  Linking,
  Alert
} from 'react-native';

import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
  onSuccess(e) {
    Alert.alert('Info', e.data +' '+'type '+e.type);
  }

  render() {
    return (
      <QRCodeScanner 
        onRead={this.onSuccess.bind(this)}
        reactivate
      />
    );
  }
}

const styles = StyleSheet.create({
  centerText: {

  },

  textBold: {

  },

  buttonText: {

  },

  buttonTouchable: {

  }
});

export default ScanScreen;