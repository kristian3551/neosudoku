import actionTypes from "../actions/actionTypes";

const messagesReducer : any = (state = {
    messageType: '',
    message: '',
    hasMessage: false
}, action: { type: string; payload: {messageType: string, message: string}}) => {
    switch(action.type) {
        case actionTypes.SET_MESSAGE: {
            return {
                messageType: action.payload.messageType,
                message: action.payload.message,
                hasMessage: action.payload.messageType === '' ? false : true
            }
        }
        default: return state;
    }
}

export default messagesReducer;