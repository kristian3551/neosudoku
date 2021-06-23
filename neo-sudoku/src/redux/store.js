import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/auth';
import sudokuReducer from './reducers/sudoku';
import messagesReducer from './reducers/messages';

const store = createStore(combineReducers({
    auth: authReducer,
    currentSudoku: sudokuReducer,
    messages: messagesReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;