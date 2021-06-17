import React from 'react';
import styles from './styles.module.css';
import Log from '../log';

type LogType = {
    date: Date;
    countOfSudokus: number;
    ratingPoints: number;
}

interface Props {
    logs: Array<any>;
}

type RenderFC = (arr: Array<any>) => React.ReactNode;

const LogSection: React.FunctionComponent<Props> = ({ logs }) => {

    const renderLogs: RenderFC = (logs) => {
        return logs.map((e, i) => {
            return <Log date={e.date} countOfSudokus={1}
                ratingPoints={e.ratingPoints} />
        })
    }

    return (
        <section className={styles["log-section"]}>
        <h2>Activities</h2>
            {renderLogs(logs.sort((a: any,b: any) => {
                const date1 = new Date(a.date);
                const date2 = new Date(b.date);
                return date2.getTime() - date1.getTime();
            }))}
        </section>
    );
}

export default LogSection;