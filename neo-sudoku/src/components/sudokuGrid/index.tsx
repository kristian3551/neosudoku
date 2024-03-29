import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';

interface Props { 
    sudoku: any;
    currentSudoku: any; 
    setDigit: Function;
    setBoxOnFocus: Function;
    defaultMatrix: any;
    addToHistory: Function;
    userId: string;
}

const SudokuGrid : React.FunctionComponent<Props> = ({ sudoku, defaultMatrix, userId, currentSudoku, setDigit, setBoxOnFocus, addToHistory }) => {
    const handleFocus = (i: number, j: number) => {
        setBoxOnFocus(i, j);
    }

    const renderInputs: (square: Array<number>, squareIndex: number) => React.ReactNode = (square, squareIndex) => {
        return square.map((e,i) => {
            return (<input className={defaultMatrix[squareIndex][i] !== 0 ? styles['defaultCharacters'] : ''} key={`input-${i}-${squareIndex}`} type="text" 
                value={e !== 0 ? e : ''} disabled = {defaultMatrix[squareIndex][i] !== 0}
                onChange={async (e1) => {
                    const digit = e1.target.value ? +e1.target.value: 0;
                    addToHistory(digit === 0 ? 'removed' : 'added', digit === 0 ? e : digit, squareIndex, i);
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

export default connect((state: { currentSudoku: any; auth: any; }) => {
    return {
        defaultMatrix: state?.currentSudoku.defaultMatrix,
        currentSudoku: state?.currentSudoku,
        userId: state?.auth.user._id
    }
}, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j)),
        setBoxOnFocus: (i: number, j: number) => dispatch(sudokuActions.setBoxOnFocus(i, j)),
        addToHistory: (type: 'added' | 'removed', digit: number, i: number, j: number) => dispatch(sudokuActions.addToHistory(type, digit, i, j))
    }
})(SudokuGrid);