import React from 'react';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';
import { connect } from 'react-redux';
import { checkSudoku, convertInRegularSudoku } from '../../utils/checkSudoku';
import solve from '../../utils/sudokuSolver';
import sudokuApi from '../../services/sudokus';

type Props = { 
    sudoku: Array<Array<number>>;
    setDigit: Function;
    coordinates: Array<number>;
    userId: string;
    sudokuId: string;
    addToSolved: Function;
    addToHistory: Function;
    returnHistory: Function;
 };

const GameControls: React.FunctionComponent<any> = ({ sudoku, sudokuId, setDigit, coordinates, userId, addToSolved, history,
    addToHistory, returnHistory }) => {
    const handleClick = (e: number) => {
        setDigit(e, coordinates[0], coordinates[1]);
        addToHistory(e, coordinates[0], coordinates[1])
    }
    const handleFinish = () => {
        const isSolved = checkSudoku(sudoku);
        if(isSolved) {
            sudokuApi.addSudokuToSolved(userId, sudokuId)
                .then(e => {
                    addToSolved(sudokuId);
                })
        } else {
            console.log('Nope');
        }
    }
    const handleDelete = () => {
        const digit = sudoku[coordinates[0]][coordinates[1]];
        setDigit(0, coordinates[0], coordinates[1]);
        addToHistory(0, coordinates[0], coordinates[1])
    }
    const handleHint = () => {
        console.log(convertInRegularSudoku(sudoku));
    }
    const handleReturn = () => {
        const lastLog = history[history.length - 1];
        if(!lastLog) return;
        setDigit(lastLog.digit ? 0 : lastLog.digit, lastLog.coordinates[0][0], lastLog.coordinates[0][1]);
        returnHistory();
        console.log(history);
    }
    return (<div className={styles["game-controls"]}>
        <div className={styles["options-menu"]}>
            <button type="button" onClick={handleReturn}>Return</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleHint}>Hint</button>
        </div>
        <div className={styles["digits"]}>
            {[1,2,3,4,5,6,7,8,9].map((e,i) => {
                return (<button key={'button '+ i} onClick={(e1) => handleClick(e)}>{e}</button>)
            })}
        </div>
        <button onClick={handleFinish}>Finish</button>
    </div>)
}

export default connect((state: { auth: any; currentSudoku: any}) => {
    return {
        coordinates: state?.currentSudoku.boxOnFocus,
        sudoku: state?.currentSudoku.matrix,
        userId: state?.auth.user._id,
        sudokuId: state?.currentSudoku._id,
        currentSudokuMatrix: state?.currentSudoku.matrix,
        history: state?.currentSudoku.history
    }
}, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j)),
        addToSolved: (sudokuId: string) => dispatch(sudokuActions.addSudokuToSolved(sudokuId)),
        addToHistory: (digit: number, i: number, j: number) => dispatch(sudokuActions.addToHistory(digit, i, j)),
        returnHistory: () => dispatch(sudokuActions.returnHistory())
    }
})(GameControls);