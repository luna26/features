import React, {Component} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import CameraComp from './CameraComp';
import CameraRollPicker from 'react-native-camera-roll-picker';
import { ButtonCircle } from './common/ButtonCircle';

class CameraView extends Component{
    renderComponent(){
        const { selectCameraRoll } = this.props;

        switch(selectCameraRoll){
            case 'roll-camera':
                return <CameraRollPicker />
            case 'camera-module':
                return <CameraComp />
            default:
                return this.renderMenu();
        }
    }

    renderMenu(){
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

    render(){
        const { containerStyles } = styles;
        return(
            <View style={{flex:1}}>
                {this.renderComponent()}
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
    console.log(state);
    return {
        selectCameraRoll: state.selectCameraRoll
    };
};

export default connect(mapStateToProps, actions)(CameraView);