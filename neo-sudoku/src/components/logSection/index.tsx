import React from 'react';
import styles from './styles.module.css';
import Log from '../log';
import aggregateLogs from '../../utils/aggregateLogs';

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

    const aggregatedLogs : any = logs ? aggregateLogs(logs) : [];
    
    const renderLogs: RenderFC = (logs) => {
        return logs.map((e, i) => {
            return <Log key={`log-${i}`} date={e.date} countOfSudokus={e.countOfSudokus}
                ratingPoints={e.ratingPoints} />
        })
    }

    return (
        <section className={styles["log-section"]}>
        <h2>Activities</h2>
            {logs && renderLogs(Object.keys(aggregatedLogs).sort((a: any,b: any) => {
                const date1 = new Date(aggregatedLogs[a][0].date);
                const date2 = new Date(aggregatedLogs[b][0].date);
                return date2.getTime() - date1.getTime();
            })
            .map(e => ({ date: aggregatedLogs[e][0].date, 
            countOfSudokus: aggregatedLogs[e].length, 
            ratingPoints: aggregatedLogs[e].reduce((acc: number, curr: any) => acc + curr.ratingPoints, 0)
                })))}
        </section>
    );
}

export default LogSection;