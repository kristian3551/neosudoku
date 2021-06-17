import React, { InputHTMLAttributes, useState } from 'react';
import styles from './styles.module.css';
import Header from '../../components/header';
import sudokuApi from '../../services/sudokus';

const SudokuSolverPage : React.FunctionComponent = () => {
    const [matrix, setMatrix] = 
    useState([[0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0], 
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0],
            [0,0,0,0,0,0,0,0,0]]);

    const handleChange = (e: any, i: number, j: number) => {
        const newMatrix = [...matrix];
        newMatrix[i][j] = +e.target.value;
        setMatrix(newMatrix);
    }

    const renderInputs: (box: Array<number>, boxIndex: number) => React.ReactNode = (box, boxIndex) => {
        return box.map((e,i) => {
            return (<input key={`input-${i}-${boxIndex}`} type="text" 
                defaultValue={e !== 0 ? e : ''}
                onChange={(e) => handleChange(e, boxIndex, i)}
                />)
        })
    }

    const handleClick = async () => {
        sudokuApi.solveSudoku(matrix)
            .then(e => e.json())
            .then(solvedSudoku => {
                setMatrix(solvedSudoku);
            })
    }

    return (<>
        <Header/>
        <main className={styles['main']}>
        <div className={styles['sudokuUpperContainer']}>
        <div className={styles["sudoku-container"]}>
        {matrix.map((e,i) => {
            return <div key={`big-square-${i}`} className={styles['big-square']}>
            {renderInputs(e, i)}
        </div>
        })}
        </div>
        </div>
            <button onClick={(e) => handleClick()}>Solve</button>
        </main>
    </>);
}

export default SudokuSolverPage;