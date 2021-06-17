import React, { useMemo, useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';
import { connect } from 'react-redux';
import { checkSudoku } from '../../utils/checkSudoku';
import sudokuApi from '../../services/sudokus';
import calculateRating from '../../utils/calculateRating';

type Props = { 
    sudoku: Array<Array<number>>;
    setDigit: Function;
    coordinates: Array<number>;
    user: any;
    addToSolved: Function;
    addToHistory: Function;
    returnHistory: Function;
    currentSudokuObject: any;
 };

const GameControls: React.FunctionComponent<any> = ({ sudoku, currentSudokuObject, setDigit, coordinates, user, addToSolved, history,
    addToHistory, returnHistory }) => {
    const [hintsCount, setHintsCount] = useState(0);
    const solvedSudoku : any = useMemo(async () => {
        return await sudokuApi.solveSudoku(currentSudokuObject.defaultMatrix)
            .then(e => e.json())
            .then(e => e);
    }, [currentSudokuObject.defaultMatrix])
    const routerHistory = useHistory();

    const handleClick = (e: number) => {
        setDigit(e, coordinates[0], coordinates[1]);
        addToHistory('added', e, coordinates[0], coordinates[1])
    }
    const handleFinish = () => {
        const isSolved = checkSudoku(sudoku);
        const date = new Date(currentSudokuObject.date);
        if(isSolved) {
            const ratingPoints = calculateRating(user.ratingsByType[currentSudokuObject.type],
                currentSudokuObject.rating, user.solvedSudokus.length, hintsCount);
            sudokuApi.addSudokuToSolved(user._id, 
                date, currentSudokuObject.difficulty, 
                currentSudokuObject.type, ratingPoints)
                .then(e => {
                    Promise.all([sudokuApi.setRating(user._id, currentSudokuObject.type,
                        user.ratingsByType[currentSudokuObject.type] + ratingPoints),
                        sudokuApi.setCurrentSudoku(null, user._id)
                    ])
                    .then(([res1, res2]) => {
                        addToSolved(date, currentSudokuObject.difficulty, 
                            currentSudokuObject.type, ratingPoints);
                        routerHistory.push('/');
                    });
                })
        } else {
            console.log('Nope');
        }
    }
    const handleDelete = () => {
        const digit = sudoku[coordinates[0]][coordinates[1]];
        setDigit(0, coordinates[0], coordinates[1]);
        addToHistory('removed', digit, coordinates[0], coordinates[1])
    }
    const handleHint = async () => {
        const solvedObject = await solvedSudoku;
        console.log(solvedSudoku);
        const digit = solvedObject[coordinates[0]][coordinates[1]];
        setDigit(digit, coordinates[0], coordinates[1]);
        setHintsCount(hintsCount + 1);
    }
    const handleReturn = () => {
        const lastLog = history[history.length - 1];
        console.log(lastLog);
        if(!lastLog) return;
        if(lastLog.type === 'added') setDigit(0, lastLog.coordinates[0][0], lastLog.coordinates[0][1])
        else setDigit(lastLog.digit, lastLog.coordinates[0][0], lastLog.coordinates[0][1]);
        returnHistory();
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
        user: state?.auth.user,
        history: state?.currentSudoku.history,
        currentSudokuObject: state?.currentSudoku
    }
}, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j)),
        addToSolved: 
            (date: Date, difficulty: string, type: number, ratingPoints: number) => 
                dispatch(sudokuActions.addSudokuToSolved(date, difficulty, type, ratingPoints)),
        addToHistory: (type: 'added' | 'removed', digit: number, i: number, j: number) => dispatch(sudokuActions.addToHistory(type, digit, i, j)),
        returnHistory: () => dispatch(sudokuActions.returnHistory())
    }
})(GameControls);