import actionTypes from "./actionTypes";

const setMessage : 
    (messageType: string, message: string) => { type: string, payload: Object;} 
        = (messageType, message) => {
    return {
        type: actionTypes.SET_MESSAGE,
        payload: {
            messageType, message
        }
    }
}

export default { setMessage };