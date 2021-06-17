const convertInRegularSudoku = (sudoku) => {
    let convertedSudoku = [];
    convertedSudoku.push([...sudoku[0].slice(0, 3), ...sudoku[1].slice(0, 3), ...sudoku[2].slice(0, 3)])
    convertedSudoku.push([...sudoku[0].slice(3, 6), ...sudoku[1].slice(3, 6), ...sudoku[2].slice(3, 6)])
    convertedSudoku.push([...sudoku[0].slice(6, 9), ...sudoku[1].slice(6, 9), ...sudoku[2].slice(6, 9)])
    convertedSudoku.push([...sudoku[3].slice(0, 3), ...sudoku[4].slice(0, 3), ...sudoku[5].slice(0, 3)])
    convertedSudoku.push([...sudoku[3].slice(3, 6), ...sudoku[4].slice(3, 6), ...sudoku[5].slice(3, 6)])
    convertedSudoku.push([...sudoku[3].slice(6, 9), ...sudoku[4].slice(6, 9), ...sudoku[5].slice(6, 9)])
    convertedSudoku.push([...sudoku[6].slice(0, 3), ...sudoku[7].slice(0, 3), ...sudoku[8].slice(0, 3)])
    convertedSudoku.push([...sudoku[6].slice(3, 6), ...sudoku[7].slice(3, 6), ...sudoku[8].slice(3, 6)])
    convertedSudoku.push([...sudoku[6].slice(6, 9), ...sudoku[7].slice(6, 9), ...sudoku[8].slice(6, 9)])
    return convertedSudoku;
}

const sudokuSolver = function(matrix) {
    
    const isValidSpot = (matrix, row, col, number) => {
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

const isFilled = (matrix) => {
    for(let i = 0; i < matrix.length; i++) {
        for(let j = 0; j < matrix[0].length; j++) {
            if(matrix[i][j] === 0) return false;
        }
    }
    return true;
}

let solvedMatrix = [];

const solve  = (matrixArray) => {
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

module.exports = sudokuSolver;