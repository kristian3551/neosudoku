import React from 'react';
import styles from './styles.module.css';

interface Props {
    ratings: {
        [key: string]: number;
    }
}

const RatingsSection : React.FunctionComponent<Props> = ({ ratings }) => {
    return ( <section className={styles["ratings-section"]}>
    <h2>Ratings</h2>
    <div className={styles["flex-container"]}>
        <article>
            <h4>Classical (9x9)</h4>
            <p>{ratings['classical']} | 6 sudokus</p>
        </article>
        <article>
            <h4>Irregular (6x6)</h4>
            <p>1500 | 6 sudokus</p>
        </article>
        <article>
            <h4>Killer</h4>
            <p>1500 | 6 sudokus</p>
        </article>
    </div>
</section>)
}

export default RatingsSection;