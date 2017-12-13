export default (state = null, action) => {
    switch (action.type) {
        case 'camera-module':
            return action.payload;
        case 'roll-camera':
            return action.payload;
        default:
            return state;
    }
};