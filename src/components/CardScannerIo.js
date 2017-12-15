import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { CardIOModule, CardIOUtilities } from 'react-native-awesome-card-io';

class CardScannerIo extends Component {

  componentWillMount() {
    
  }

  scanCard() {
    CardIOModule
      .scanCard()
      .then(card => {
        // the scanned card
      })
      .catch(() => {
        // the user cancelled
      })
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={this.scanCard}>
          <Text>Scan card!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CardScannerIo;