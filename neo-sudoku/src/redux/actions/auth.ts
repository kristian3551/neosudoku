import actionTypes from './actionTypes';

const login : (user: Object) => { type: string, payload: Object } = (user) => {
    return {
        type: actionTypes.LOGIN,
        payload: user
    }
}

const logout : () => { type: string} = () => {
    return {
        type: actionTypes.LOGOUT
    }
};

export default { login, logout };