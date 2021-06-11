import actionTypes from '../actions/actionTypes';
import * as redux from 'redux';


// type IAuthReducer = (initialState: {
//     user: Object;
//     loggedIn: boolean;
// }, action: { type: string, payload: Object }) => Object;




const authReducer : any = (initialState = {
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
    }
}

export default authReducer;