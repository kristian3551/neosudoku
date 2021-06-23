import React from 'react';
import styles from './styles.module.css';

interface Props {
    ratings: {
        [key: string]: number;
    };
    solvedSudokus: Array<any>;
}

const RatingsSection : React.FunctionComponent<Props> = ({ ratings, solvedSudokus }) => {
    return ( <section className={styles["ratings-section"]}>
    <h2>Ratings</h2>
    <div className={styles["flex-container"]}>
        {ratings && Object.keys(ratings).map((e,i) => {
            return (<article key={`article-${i}`}>
                <h4>{e}</h4>
                <p>{ratings[e].toFixed(2)} | {solvedSudokus.filter(e1 => e1.type == e).length} sudokus</p>
            </article>)
        })}
    </div>
</section>)
}

export default RatingsSection;