export default (state = null, action) => {
    switch (action.type) {
        case 'print-finger':
        action.payload();
            return action.payload;
        default:
            return state;
    }
};