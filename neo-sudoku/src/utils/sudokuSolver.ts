import { convertInRegularSudoku } from './checkSudoku';

const sudokuSolver : Function = function(matrix: Array<Array<number>>) {
    
    const isValidSpot : 
    (matrix: Array<Array<number>>, row: number, col: number, number: number) => boolean 
        = (matrix, row, col, number) => {
        for(let i = 0; i < matrix.length; i++) {
            if(matrix[row][i] === number || matrix[i][col] === number)
                return false;
        }

        const bigSquareRow = Math.floor(row / 3) + 1;
        const bigSquareCol = Math.floor(col / 3) + 1;

        for (let i = (bigSquareRow - 1) * 3; i < bigSquareRow * 3; i++) {
            for(let j = (bigSquareCol - 1) * 3; j < bigSquareCol * 3; j++) {
                if(matrix[i][j] == number) return false;
            }
        }

        return true;
}

const isFilled : (matrix: Array<Array<number>>) => boolean = (matrix) => {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) return false;
        }
    }
    return true;
}

let solvedMatrix : Array<any> = [];

const solve : (matrix: Array<Array<any>>) => any = (matrixArray) => {
    if(solvedMatrix.length === 9) return;
    else if(isFilled(matrixArray)) {
        solvedMatrix = JSON.parse(JSON.stringify(matrixArray));
    }
    else {
        let row = 0;
        let col = 0;
        let isFound = false;
        for(let i = 0; i < matrixArray.length; i++) {
            for(let j = 0; j < matrixArray.length; j++) {
                if(matrixArray[i][j] === 0) {
                    isFound = true;
                    row = i;
                    col = j;
                }
                if(isFound) break;
            }
            if(isFound) break;
        }

        for(let k = 1; k <= 9; k++) {
            if(isValidSpot(matrixArray, row, col, k)) {
                matrixArray[row][col] = k;
                solve(matrixArray);
                matrixArray[row][col] = 0;
            }
        }
    }
    }

    solve(convertInRegularSudoku(matrix));

    return solvedMatrix;
}

export default sudokuSolver;