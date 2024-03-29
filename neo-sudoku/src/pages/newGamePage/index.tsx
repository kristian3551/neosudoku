import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from '../../components/header';
import SudokuGrid from '../../components/sudokuGrid';
import LastSudokusAside from '../../components/lastSudokusAside';
import GameControls from '../../components/gameControls';
import { Redirect, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import sudokuApi from '../../services/sudokus';
import sudokuActions from '../../redux/actions/sudoku';

interface Props {
    loggedIn: boolean;
    setSudoku: Function;
    solvedSudokus: Array<any>;
    currentSudoku: {
        _id: string;
        difficulty: string;
        matrix: Array<Array<number>>;
    };
    userId: string;
    isSolved: boolean;
}

const NewGamePage: React.FunctionComponent<Props> = ({ userId, currentSudoku,
    loggedIn, setSudoku, solvedSudokus, isSolved }) => {
    const { search }: { search: any } = useLocation();
    const difficulty = search.split('=')[1];
    useEffect(() => {
        if(!!currentSudoku) if (!currentSudoku?.difficulty) sudokuApi.getRandomByDifficulty(difficulty)
            .then(e => e.json())
            .then(sudoku => {
                const defaultMatrix = JSON.parse(JSON.stringify(sudoku.matrix));
                const sudokuObject = {
                    ...sudoku, defaultMatrix,
                    history: [], date: Date.now()
                };
                setSudoku(sudokuObject);
                sudokuApi.setCurrentSudoku(sudokuObject, userId);
            })
            .catch(err => console.log(err));
    }, []);

    useEffect(() => {
        return () => {
            if (window.location.pathname !== '/newGame' && !isSolved) {
                sudokuApi.setCurrentSudoku(currentSudoku, userId)
                    .then(e => e.json())
                    .catch(e => console.log('Error'));
            }
        }
    });

    return (<>
        {!loggedIn && (<Redirect to="/login" />)}
        <Header />
        <div className={styles["my-container"]}>

            <main className={styles['main']}>
                <section className={styles["sudoku-section"]}>
                    <div className={styles["upper-options"]}>
                        <p>Difficulty: {currentSudoku.difficulty}</p>
                        {/* <p>Check for mistakes <input type="checkbox"></input></p> */}
                        <button><i className="fas fa-pause"></i></button>
                    </div>
                    <div className={styles["sudokuGameWrapper"]}>
                        <div className={styles['sudokuUpperContainer']}>
                            <SudokuGrid sudoku={!!currentSudoku ? JSON.parse(JSON.stringify(currentSudoku.matrix)) : []} />
                        </div>
                        <div className={styles['nextToSudoku']}>
                            <GameControls />
                        </div>
                    </div>

                </section>

            </main>
            <LastSudokusAside solvedSudokus={!!solvedSudokus ? solvedSudokus : []} />
        </div>
    </>);
}

export default connect((state: { auth: any; currentSudoku: any; }) => {
    return {
        loggedIn: state?.auth.loggedIn,
        userId: state?.auth.user._id,
        solvedSudokus: state?.auth.user.solvedSudokus,
        currentSudoku: state?.currentSudoku,
        isSolved: state?.currentSudoku.isSolved
    }
}, (dispatch) => {
    return {
        setSudoku: (sudoku: Object) => dispatch(sudokuActions.setSudoku(sudoku))
    }
})(NewGamePage);