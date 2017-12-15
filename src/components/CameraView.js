import React, {Component} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import CameraComp from './CameraComp';
import { ButtonCircle } from './common/ButtonCircle';

class CameraView extends Component{
    render(){
        const { containerStyles } = styles;
        return(
            <View style={containerStyles}>
                <ButtonCircle onPress={() =>this.props.selectRollCamera('camera-module')}>
                    Camera
                </ButtonCircle>  
    
                <ButtonCircle  onPress={() =>this.props.selectRollCamera('roll-camera')}>
                    Gallery
                </ButtonCircle>  
            </View>
        );
    }
}

styles = {
    containerStyles:{
        justifyContent:'center',
        alignItems:'center',
        flex:1
    }
}

const mapStateToProps = state => {
    return {
        selectCameraRoll: state.selectCameraRoll
    };
};

export default connect(mapStateToProps, actions)(CameraView);