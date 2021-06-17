import React, { useEffect, useState } from 'react';
import styles from './styles.module.css';
import sudokuApi from '../../services/sudokus';

type SolvedSudokusType = {
    difficulty: 'easy' | 'medium' | 'hard' | 'expert';
    type: 'classical' | 'irregular (6x6)';
    solved: boolean;
};

const LastSudokusAside : React.FunctionComponent<{ 
    solvedSudokus: Array<any>; 
}> = ({ solvedSudokus }) => {

    const renderSolvedSudokus : (arr: Array<{
        difficulty: 'easy' | 'medium' | 'hard' | 'expert';
        type: 'classical' | 'irregular (6x6)';
        ratingPoints: number;
    }>) => React.ReactNode = (arr) => {
        return arr.map((e, i) => {
            return (<li key={i}>
                <p>Diff.: {e.difficulty}</p>
                <p>Type: {e.type}</p>
                {/* {e.solved ? (<i className="fas fa-check"></i>) : (<i className="fas fa-times"></i>)} */}
                <p>{e.ratingPoints > 0 ? `+${e.ratingPoints.toFixed(2)}` 
                : e.ratingPoints.toFixed(2)}pts</p>
            </li>);
        })
    }

    return (<aside className={styles['aside']}>
    <div className={styles["aside-heading"]}>
        Last sudokus
    </div>
    <ul>
        {renderSolvedSudokus(solvedSudokus)}
    </ul>

</aside>);
}

export default LastSudokusAside;