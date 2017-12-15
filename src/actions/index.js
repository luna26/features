import { Actions } from 'react-native-router-flux';

export const selectMenu = (menuId) => {
  switch (menuId) {
    case 0:
      Actions.fingerPrintView();
      break;
    case 1:
      Actions.qrScannerCode();
      break;
    case 3:
      Actions.virtualSignature();
      break;
    case 4:
      Actions.cameraView();
      break;
  }
  return {
    type: 'select_menu',
    payload: 'renderMenu'
  };
};

export const selectRollCamera = (param) => {
  switch (param) {
    case 'camera-module':
      Actions.cameraComp();
      break;
    case 'roll-camera':
      Actions.rollCamera();
      break;
  }
  return {
    type: param,
    payload: param
  };
};

export const accessFinger = (param) => {
  //if(param) Actions.accessFinger();
  if (param) {
    return {
      type: 'print-finger',
      payload: Actions.accessFinger
    };
  }else{
    return {
      type: 'print-finger',
      payload: Actions.deniedFinger
    };
  }
};

