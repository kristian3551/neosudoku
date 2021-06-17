import React from 'react';
import styles from './styles.module.css';

interface Props {
    date: Date;
    countOfSudokus: number;
    ratingPoints: number;
}

const Log : React.FunctionComponent<Props> = ({ date, countOfSudokus, ratingPoints}) => {
    const parsedDate = new Date(date);

    return (<div className={styles['log']}>
    <h3>{`${parsedDate.getDate()}/${parsedDate.getMonth()}/${parsedDate.getFullYear()}`}</h3>
    <div>
        <img src="https://static.thenounproject.com/png/1049145-200.png" alt="icon"/>
    <p>Solved {countOfSudokus} classical sudokus <span>{ratingPoints > 0 ? `+${ratingPoints.toFixed(2)}` : ratingPoints.toFixed(2)} rate pts</span></p>
    </div>
</div>)
}

export default Log;