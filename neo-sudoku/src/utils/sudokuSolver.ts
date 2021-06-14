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

const solve : (matrix: Array<Array<any>>) => any = (matrix) => {
    if(isFilled(matrix)) return matrix;
    else {
        let row = 0;
        let col = 0;
        let isFound = false;
        for(let i = 0; i < matrix.length; i++) {
            for(let j = 0; j < matrix.length; j++) {
                if(matrix[i][j] === 0) {
                    isFound = true;
                    row = i;
                    col = j;
                }
                if(isFound) break;
            }
            if(isFound) break;
        }

        for(let k = 1; k <= 9; k++) {
            if(isValidSpot(matrix, row, col, k)) {
                matrix[row][col] = k;
                solve(matrix);
                matrix[row][col] = 0;
            }
        }
    }
}

export default solve;