import React from 'react';
import { connect } from 'react-redux';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';

interface Props { 
    sudoku: any; 
    setDigit: Function;
    setBoxOnFocus: Function;
}

const SudokuGrid : React.FunctionComponent<Props> = ({ sudoku, setDigit, setBoxOnFocus }) => {

    const handleFocus = (i: number, j: number) => {
        setBoxOnFocus(i, j);
    }

    const renderInputs: (square: Array<number>, squareIndex: number) => React.ReactNode = (square, squareIndex) => {
        return square.map((e,i) => {
            return (<input key={`input-${i}-${squareIndex}`} type="text" 
                defaultValue={e !== 0 ? e : ''} disabled = {e != 0}
                onChange={(e) => {
                    setDigit(+e.target.value, squareIndex, i);
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

export default connect(null, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j)),
        setBoxOnFocus: (i: number, j: number) => dispatch(sudokuActions.setBoxOnFocus(i, j))
    }
})(SudokuGrid);