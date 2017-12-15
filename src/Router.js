import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import ItemList from './components/ItemList';
import FingerPrintView from './components/FingerPrintView';
import CameraView from './components/CameraView';
import QRCodeScanner from './components/QRCodeScanner';
import VirtualSignature from './components/VirtualSignature';
import CameraComp from './components/CameraComp';
import CameraRollPicker from 'react-native-camera-roll-picker';

const RouterComponent = () => {
    return (
        <Router >
            <Scene key='root'>
                <Scene key='login' component={ItemList} title='Demo App' />
                <Scene key='fingerPrintView' component={FingerPrintView} title='Finger Print'/>
                <Scene key='cameraView' component={CameraView} title='Camera Roll'/>
                <Scene key='qrScannerCode' component={QRCodeScanner} title='Code Scanner'/>
                <Scene key='virtualSignature' component={VirtualSignature} title='Virtual Signature'/>
                <Scene key='virtualSignature' component={VirtualSignature} title='Virtual Signature'/>
                <Scene key='cameraComp' component={CameraComp} title='Camera'/>
                <Scene key='rollCamera' component={CameraRollPicker} title='Roll Camera'/>
            </Scene>
        </Router>
    );
}

export default RouterComponent;