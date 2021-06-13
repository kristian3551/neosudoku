import actionTypes from '../actions/actionTypes';

const sudokuReducer : any = (state = {
    date: Date.now,
    matrix: [[0,0]],
    rating: 1500,
    difficulty: '',
    type: 'classical',
    boxOnFocus: [0, 0]
}, action: { type: string; payload: any}) => {
    switch(action.type) {
        case actionTypes.SET_CURRENT_SUDOKU: {
            return action.payload;
        }
        case actionTypes.SET_DIGIT: {
            let newState = state;
            newState.matrix[action.payload.coordinates[0]][action.payload.coordinates[1]] = action.payload.digit;
            return newState;
        }
        case actionTypes.SET_BOX: {
            return {
                ...state,
                boxOnFocus: [action.payload[0], action.payload[1]]
            }
        }
        default: return state;
    }
}

export default sudokuReducer;