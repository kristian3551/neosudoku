import actionTypes from '../actions/actionTypes';

const authReducer : any = (state = {
    user: {},
    loggedIn: false
}, action: { type: string, payload: any }) => {
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
        case actionTypes.ADD_TO_SOLVED: {
            let newState : { user:any }= state;
            newState.user.solvedSudokus.push(action.payload);
            return newState;
        }
        default: return state;
    }
}

export default authReducer;