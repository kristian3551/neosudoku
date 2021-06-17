import actionTypes from '../actions/actionTypes';

const sudokuReducer : any = (state = {
    date: Date.now(),
    matrix: [[0,0]],
    defaultMatrix: [[0,0]],
    rating: 1500,
    difficulty: '',
    type: 'classical',
    boxOnFocus: [0, 0],
    history: [{coordinates: [0,0]}]
}, action: { type: string; payload: any}) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_SUDOKU: {
            return action.payload;
        }
        case actionTypes.SET_DIGIT: {
            let newMatrix = JSON.parse(JSON.stringify(state.matrix));
            newMatrix[action.payload.coordinates[0]][action.payload.coordinates[1]] = 
                action.payload.digit;
            return { ...state, matrix: newMatrix};
        }
        case actionTypes.SET_BOX: {
            return {
                ...state,
                boxOnFocus: [action.payload[0], action.payload[1]]
            }
        }
        case actionTypes.DELETE_CURRENT_SUDOKU: {
            return {
                matrix: [[0,0]],
                defaultMatrix: [[0,0]],
                rating: 1500,
                difficulty: '',
                type: 'classical',
                boxOnFocus: [0, 0]
            }
        }
        case actionTypes.ADD_TO_HISTORY: {
            return {
                ...state,
                history: [...state.history, { type: action.payload.type, digit: action.payload.digit, 
                    coordinates: action.payload.coordinates}]
            };
        }
        case actionTypes.RETURN_HISTORY: {
            let newHistory = [...state.history];
            newHistory.pop();
            return {
                ...state, history: newHistory
            }
        }
        default: return state;
    }
}

export default sudokuReducer;