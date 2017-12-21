import React, { Component } from 'react';
import {View, Text} from 'react-native';

class GeolocationComp extends Component{
    constructor(props) {
        super(props);
    
        this.state = {
          latitude: null,
          longitude: null,
          error: null,
        };
      }
    
      componentDidMount() {
        console.log(this.state);
        navigator.geolocation.watchPosition((position) => {
            console.log(position);
            this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude
            });
            console.log(this.state);
        });
      }
    
      componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
      }
    
      render() {
        return (
          <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Latitude: {this.state.latitude}</Text>
            <Text>Longitude: {this.state.longitude}</Text>
            {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
          </View>
        );
      }
    
    
}

export default GeolocationComp;