import React from 'react';
import styles from './styles.module.css';

type SolvedSudokusType = {
    difficulty: 'easy' | 'medium' | 'hard' | 'expert';
    type: 'classical' | 'irregular (6x6)';
    solved: boolean;
};

const LastSudokusAside : React.FunctionComponent<{ 
    solvedSudokus: Array<SolvedSudokusType>; 
}> = ({ solvedSudokus }) => {

    const renderSolvedSudokus : (arr: Array<{
        difficulty: 'easy' | 'medium' | 'hard' | 'expert';
        type: 'classical' | 'irregular (6x6)';
        solved: boolean;
    }>) => React.ReactNode = (arr) => {
        return arr.map((e, i) => {
            return (<li key={i}>
                <p>Diff.: {e.difficulty}</p>
                <p>Type: {e.type}</p>
                {e.solved ? (<i className="fas fa-check"></i>) : (<i className="fas fa-times"></i>)}
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