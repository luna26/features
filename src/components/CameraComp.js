import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Camera from 'react-native-camera';
import Dimensions from 'Dimensions';
import { ButtonCircle } from './common/ButtonCircle';

class CameraComp extends Component {
    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({ metadata: options })
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }

    render() {
        const { buttonStyle } = styles;
        return (
            <Camera
                ref={(cam) => {
                    this.camera = cam;
                }}
                style={{ flex: 1, alignItems: 'flex-end' }}
                aspect={Camera.constants.Aspect.fill}>
                <ButtonCircle style={buttonStyle} onPress={this.takePicture.bind(this)}>CAPTURE</ButtonCircle>
            </Camera>
        );
    }
}

const styles = {
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        color: '#fff',
        padding: 10,
        margin: 40
    },
    buttonStyle: {
        alignSelf: 'flex-end',
        marginTop:100
    }
}

export default CameraComp;