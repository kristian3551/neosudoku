import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';

interface Props { 
    sudoku: any; 
    setDigit: Function;
    setBoxOnFocus: Function;
    defaultMatrix: any;
    addToHistory: Function;
}

const SudokuGrid : React.FunctionComponent<Props> = ({ defaultMatrix, sudoku, setDigit, setBoxOnFocus, addToHistory }) => {
    console.log(sudoku);
    const handleFocus = (i: number, j: number) => {
        setBoxOnFocus(i, j);
    }

    const renderInputs: (square: Array<number>, squareIndex: number) => React.ReactNode = (square, squareIndex) => {
        return square.map((e,i) => {
            return (<input key={`input-${i}-${squareIndex}`} type="text" 
                defaultValue={e !== 0 ? e : ''} disabled = {defaultMatrix[squareIndex][i] !== 0}
                onChange={(e) => {
                    const digit = e.target.value ? +e.target.value: 0;
                    // if(digit === 0) addToHistory(sudoku[squareIndex][i], squareIndex, i);
                    addToHistory(digit, squareIndex, i);
                    setDigit(digit, squareIndex, i);
                }} 
                onFocus={(e) => handleFocus(squareIndex, i)}/>)
        })
    }

    return (<div className={styles["sudoku-container"]}>
    {sudoku.map((e: any,i: number) => {
        return (<div key={`big-square-${i}`} className={styles['big-square']}>
            {renderInputs(e, i)}
    </div>)
    })}
</div>);
}

export default connect((state: { currentSudoku: any; }) => {
    return {
        defaultMatrix: state?.currentSudoku.defaultMatrix
    }
}, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j)),
        setBoxOnFocus: (i: number, j: number) => dispatch(sudokuActions.setBoxOnFocus(i, j)),
        addToHistory: (digit: number, i: number, j: number) => dispatch(sudokuActions.addToHistory(digit, i, j))
    }
})(SudokuGrid);