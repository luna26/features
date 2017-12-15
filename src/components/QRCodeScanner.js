import React, { Component } from 'react';
import {Alert} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

class ScanScreen extends Component {
  onSuccess(e) {
    Alert.alert('Info', e.data + ' ' + 'type ' + e.type);
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

export default ScanScreen;