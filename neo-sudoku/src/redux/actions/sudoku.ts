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

// const addSudokuToSolved = (userId: string, sudokuId: string) => {
//     return {
//         type: actionTypes.ADD_TO_SOLVED,
//         payload: {
//             sudokuId
//         }
//     }
// }



export default { setSudoku, setDigit, setBoxOnFocus };