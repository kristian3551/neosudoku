import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';
import sudokuReducer from './reducers/sudoku';

const store = createStore(combineReducers({
    auth: authReducer,
    currentSudoku: sudokuReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;