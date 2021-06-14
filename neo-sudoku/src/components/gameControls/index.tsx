import React from 'react';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';
import { connect } from 'react-redux';
import { checkSudoku, convertInRegularSudoku } from '../../utils/checkSudoku';
import sudokuApi from '../../services/sudokus';

const GameControls: React.FunctionComponent<{ 
    sudoku: Array<Array<number>>;
    setDigit: Function;
    coordinates: Array<number>;
    userId: string;
    sudokuId: string;
    addToSolved: Function;
 }> = ({ sudoku, sudokuId, setDigit, coordinates, userId, addToSolved }) => {
    const handleClick = (e: number) => {
        setDigit(e, coordinates[0], coordinates[1]);
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
        setDigit(0, coordinates[0], coordinates[1]);
    }
    return (<div className={styles["game-controls"]}>
        <div className={styles["options-menu"]}>
            <button type="button">Return</button>
            <button onClick={handleDelete}>Delete</button>
            <button>Hint</button>
        </div>
        <div className={styles["digits"]}>
            {[1,2,3,4,5,6,7,8,9].map((e,i) => {
                return (<button key={i} onClick={(e1) => handleClick(e)}>{e}</button>)
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
        sudokuId: state?.currentSudoku._id
    }
}, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j)),
        addToSolved: (sudokuId: string) => dispatch(sudokuActions.addSudokuToSolved(sudokuId))
    }
})(GameControls);