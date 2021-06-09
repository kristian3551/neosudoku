import React from 'react';
import styles from './styles.module.css';
import Log from '../log';

type LogType = {
    date: string;
        countOfSudokus: number;
        ratePts: number;
}

interface Props {
    logs: Array<LogType>;
}

type RenderFC = (arr: Array<LogType>) => React.ReactNode;

const LogSection: React.FunctionComponent<Props> = ({ logs }) => {

    const renderLogs: RenderFC = (logs) => {
        return logs.map((e, i) => {
            return <Log date={e.date} countOfSudokus={e.countOfSudokus}
                ratePts={e.ratePts} />
        })
    }

    return (
        <section className={styles["log-section"]}>
        <h2>Activities</h2>
            {renderLogs(logs)}
        </section>
    );
}

export default LogSection;