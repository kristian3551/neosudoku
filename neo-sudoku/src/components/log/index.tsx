import React from 'react';
import styles from './styles.module.css';

interface Props {
    date: string;
    countOfSudokus: number;
    ratePts: number;
}

const Log : React.FunctionComponent<Props> = ({ date, countOfSudokus, ratePts}) => {
    return (<div className={styles['log']}>
    <h3>{date}</h3>
    <div>
        <img src="https://static.thenounproject.com/png/1049145-200.png" alt="icon"/>
    <p>Solved {countOfSudokus} classical sudokus <span>{ratePts > 0 ? `+${ratePts}` : ratePts} rate pts</span></p>
    </div>
</div>)
}

export default Log;