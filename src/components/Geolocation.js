import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import openMap from 'react-native-open-maps';

class GeolocationComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            error: null,
        };
    }

    componentDidMount() {
        navigator.geolocation.watchPosition((position) => {
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

    _goToYosemite(lat, long) {
        openMap({ latitude: this.state.latitude, longitude: this.state.longitude });
    }

    renderButton() {
        if(this.state.latitude != null && this.state.latitude != undefined){
            return (
                <Button
                    color={'#bdc3c7'}
                    onPress={this._goToYosemite.bind(this)}
                    title="Click To Open Maps 🗺" />
            );
        }
    }

    setInfo() {
        lat = this.state.latitude;
        long = this.state.longitude;
        this._goToYosemite(lat, long);
    }

    render() {
        return (
            <View style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Latitude: {this.state.latitude}</Text>
                <Text>Longitude: {this.state.longitude}</Text>
                {this.state.error ? <Text>Error: {this.state.error}</Text> : null}
                {this.renderButton()}
            </View>
        );
    }


}

export default GeolocationComp;