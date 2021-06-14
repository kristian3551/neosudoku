const convertInRegularSudoku : (sudoku: Array<Array<number>>) => Array<any> = (sudoku) => {
    let convertedSudoku : Array<Array<number>> = [];
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

 const checkSudoku : (sudoku: Array<any>) => boolean = (sudoku) => {
    const convertedSudoku = convertInRegularSudoku(sudoku);
    convertedSudoku.forEach(e => {
        [...e].forEach((e1, i) => {
            if([...e].lastIndexOf(e1) !== i) return false;
        })
    })
    for(let i = 0; i < convertedSudoku[0].length; i++) {
        let col : Array<number> = [];
        for(let j = 0; j < convertedSudoku.length; j++) {
            if(col.includes(convertedSudoku[i][j])) return false;
            col.push(convertedSudoku[i][j]);
        } 
    }
    sudoku.forEach(e => {
        [...e].forEach((e1, i) => {
            if([...e].lastIndexOf(e1) !== i) return false;
        })
    })
    return true;
}

export { checkSudoku, convertInRegularSudoku };
