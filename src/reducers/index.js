import { combineReducers } from 'redux';
import MenuReducer from './MenuReducer';
import SelectionMenuReducer from './SelectionMenuReducer';
import SelectCameraRoll from './SelectCameraRollReducer';

export default combineReducers({
    mainMenu: MenuReducer,
    selectMenuId: SelectionMenuReducer,
    selectCameraRoll: SelectCameraRoll
});