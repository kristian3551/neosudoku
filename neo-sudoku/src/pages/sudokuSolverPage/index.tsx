import React from 'react';
import styles from './styles.module.css';
import Header from '../../components/header';
import SudokuGrid from '../../components/sudokuGrid';

const SudokuSolverPage : React.FunctionComponent = () => {
    return (<>
        <Header/>
        <main className={styles['main']}>
            <SudokuGrid/>
            <button>Solve</button>
        </main>
    </>);
}

export default SudokuSolverPage;