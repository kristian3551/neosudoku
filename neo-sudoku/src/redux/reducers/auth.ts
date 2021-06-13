import actionTypes from '../actions/actionTypes';

const authReducer : any = (state = {
    user: {},
    loggedIn: false
}, action: { type: string, payload: Object }) => {
    switch(action.type) {
        case actionTypes.LOGIN: {
            return {
                user: action.payload,
                loggedIn: true
            }
        }
        case actionTypes.LOGOUT: {
            return {
                user: {},
                loggedIn: false
            }
        }
        default: return state;
    }
}

export default authReducer;