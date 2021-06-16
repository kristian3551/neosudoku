import actionTypes from "./actionTypes"

const setSudoku : (sudoku: Object) => { type: string,
payload: Object;} = (sudoku: Object) => {
    return {
        type: actionTypes.SET_CURRENT_SUDOKU,
        payload: sudoku
    }
}

const setDigit = (digit: number, i: number, j: number) => {
    return {
        type: actionTypes.SET_DIGIT,
        payload: {
            digit,
            coordinates: [i, j]
        }
    }
}

const setBoxOnFocus = (i: number, j: number) => {
    return {
        type: actionTypes.SET_BOX,
        payload: [i,j]
    }
}

const addSudokuToSolved = (date: Date, difficulty: string, type: number, ratingPoints: number) => {
    return {
        type: actionTypes.ADD_TO_SOLVED,
        payload: {
            date, difficulty, type, ratingPoints
        }
    }
}

// const deleteBox = (i: number, j: number) => {
//     return {
//         type: actionTypes.DELETE_BOX,
//         payload: {
//             coordinates: [i, j]
//         }
//     }
// }

const deleteCurrentSudoku = () => {
    return {
        type: actionTypes.DELETE_CURRENT_SUDOKU
    }
}

const addToHistory = (digit: number, i: number, j: number) => {
    return {
        type: actionTypes.ADD_TO_HISTORY,
        payload: {
            digit,
            coordinates: [i, j]
        }
    }
}

const returnHistory = () => {
    return {
        type: actionTypes.RETURN_HISTORY
    }
}

export default { setSudoku, setDigit, setBoxOnFocus, addSudokuToSolved, deleteCurrentSudoku, addToHistory,
    returnHistory };