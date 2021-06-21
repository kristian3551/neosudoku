import React, { useMemo, useState } from 'react';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';
import { connect } from 'react-redux';
import sudokuApi from '../../services/sudokus';
import { convertInRegularSudoku } from '../../utils/checkSudoku';
import FinishButtons from '../../components/finishButtons';

type Props = {
    sudoku: Array<Array<number>>;
    setDigit: Function;
    coordinates: Array<number>;
    addToHistory: Function;
    returnHistory: Function;
    currentSudokuObject: any;
    history: any;
};

const GameControls: React.FunctionComponent<Props> = ({ sudoku, currentSudokuObject,
    setDigit, coordinates, history,
    addToHistory, returnHistory}) => {
    const [hintsCount, setHintsCount] = useState(0);
    const solvedSudoku: any = useMemo(async () => {
        return await sudokuApi.solveSudoku(currentSudokuObject.defaultMatrix)
            .then(e => e.json())
            .then(e => e);
    }, [currentSudokuObject.defaultMatrix])

    const handleClick = async (e: number) => {
        const prevDigit = sudoku[coordinates[0]][coordinates[1]];
        setDigit(e, coordinates[0], coordinates[1]);
        if (prevDigit) addToHistory('replaced', prevDigit, coordinates[0], coordinates[1])
        else addToHistory('added', e, coordinates[0], coordinates[1]);
    }
    const handleDelete = () => {
        const digit = sudoku[coordinates[0]][coordinates[1]];
        setDigit(0, coordinates[0], coordinates[1]);
        addToHistory('removed', digit, coordinates[0], coordinates[1])
    }
    const handleHint = async () => {
        let solvedObject = await solvedSudoku;
        solvedObject = convertInRegularSudoku(solvedObject);
        const digit = solvedObject[coordinates[0]][coordinates[1]];
        setDigit(digit, coordinates[0], coordinates[1]);
        setHintsCount(hintsCount + 1);
    }
    const handleReturn = () => {
        const lastLog = history[history.length - 1];
        if (!lastLog) return;
        if (lastLog.type === 'added') setDigit(0, lastLog.coordinates[0], lastLog.coordinates[1])
        else setDigit(lastLog.digit, lastLog.coordinates[0], lastLog.coordinates[1]);
        returnHistory();
    }
    return (<div className={styles["game-controls"]}>
        <div className={styles["options-menu"]}>
            <button type="button" onClick={handleReturn}>Return</button>
            <button onClick={handleDelete}>Delete</button>
            <button onClick={handleHint}>Hint</button>
        </div>
        <div className={styles["digits"]}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => {
                return (<button key={'button ' + i} onClick={(e1) => handleClick(e)}>{e}</button>)
            })}
        </div>
        <FinishButtons hintsCount={hintsCount}/>
    </div>)
}

export default connect((state: { auth: any; currentSudoku: any }) => {
    return {
        coordinates: state?.currentSudoku.boxOnFocus,
        sudoku: state?.currentSudoku.matrix,
        user: state?.auth.user,
        history: state?.currentSudoku.history,
        currentSudokuObject: state?.currentSudoku
    }
}, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j)),
        addToHistory: (type: 'added' | 'removed' | 'replaced', digit: number, i: number, j: number) => dispatch(sudokuActions.addToHistory(type, digit, i, j)),
        returnHistory: () => dispatch(sudokuActions.returnHistory())
    }
})(GameControls);