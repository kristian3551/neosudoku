import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import Header from '../../components/header';
import SudokuGrid from '../../components/sudokuGrid';
import LastSudokusAside from '../../components/lastSudokusAside';
import GameControls from '../../components/gameControls';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

interface Props {
    user: Object;
    loggedIn: boolean;
}

const NewGamePage : React.FunctionComponent<Props> = ({ user, loggedIn }) => {
    const [currentSudoku, setCurrentSudoku] = useState<Array<any>>([]);

    useEffect(() => {

    })

    return (<>
        {!loggedIn && (<Redirect to="/login"/>)}
        <Header/>
        <div className={styles["my-container"]}>

        <main className={styles['main']}>
            <section className={styles["sudoku-section"]}>
                <div className={styles["upper-options"]}>
                    <p>Difficulty: Easy</p>
                    <p>Check for mistakes <input type="checkbox"></input></p>
                    <button><i className="fas fa-pause"></i></button>
                </div>
                <div className={styles["sudoku-game-wrapper"]}>
                    <SudokuGrid/>
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

export default connect((state : { user: Object; loggedIn: boolean; }) => {
    return {
        user: !!state ? state.user : {},
        loggedIn: !!state ? state.loggedIn : false
    }
})(NewGamePage);