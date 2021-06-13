import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from '../../components/header';
import SudokuGrid from '../../components/sudokuGrid';
import LastSudokusAside from '../../components/lastSudokusAside';
import GameControls from '../../components/gameControls';
import { Redirect, useLocation } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';
import sudokuApi from '../../services/sudokus';
import sudokuActions  from '../../redux/actions/sudoku';

interface Props {
    loggedIn: boolean;
    setSudoku: Function;
}

const NewGamePage : React.FunctionComponent<Props> = ({ loggedIn, setSudoku }) => {
    const currentSudoku = useSelector(
        (state: { currentSudoku: any}) => !!state ? state.currentSudoku : {});

    const { search } : { search: any }= useLocation();
    const difficulty = search.split('=')[1];
    useEffect(() => {
        sudokuApi.getRandomByDifficulty(difficulty)
            .then(e => e.json())
            .then(sudoku => {
                setSudoku(sudoku);
            })
            .catch(err => console.log(err));
    }, []);

    return (<>
        {!loggedIn && (<Redirect to="/login"/>)}
        <Header/>
        <div className={styles["my-container"]}>

        <main className={styles['main']}>
            <section className={styles["sudoku-section"]}>
                <div className={styles["upper-options"]}>
                    <p>Difficulty: {currentSudoku.difficulty}</p>
                    {/* <p>Check for mistakes <input type="checkbox"></input></p> */}
                    <button><i className="fas fa-pause"></i></button>
                </div>
                <div className={styles["sudoku-game-wrapper"]}>
                    <SudokuGrid sudoku={currentSudoku.matrix}/>
                    <GameControls/>
                </div>

            </section>
            
        </main>
        <LastSudokusAside solvedSudokus={[{difficulty: 'medium', type: 'classical', solved: true},
    {difficulty: 'medium', type: 'classical', solved: true},
    {difficulty: 'medium', type: 'classical', solved: true},
    {difficulty: 'medium', type: 'classical', solved: true},
    {difficulty: 'medium', type: 'classical', solved: true},
    {difficulty: 'medium', type: 'classical', solved: true},
    {difficulty: 'medium', type: 'classical', solved: true}]}/>
    </div>
    </>);
}

export default connect((state : { auth: any; }) => {
    return {
        loggedIn: !!state ? state.auth.loggedIn : false
    }
}, (dispatch) => {
    return {
        setSudoku: (sudoku: Object) => dispatch(sudokuActions.setSudoku(sudoku))
    }
})(NewGamePage);