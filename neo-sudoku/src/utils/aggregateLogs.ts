const aggregateLogs = (logs: Array<any>) => {
    let aggregatedLogs : any = {};
    logs.forEach(e => {
        const parsedDate = new Date(e.date);
        const date = `${parsedDate.getDay()} ${parsedDate.getMonth() + 1} ${parsedDate.getFullYear()}`;
        if(!aggregatedLogs[date]) {
            aggregatedLogs[date] = [e];
        }
        else aggregatedLogs[date].push(e);
    })

    return aggregatedLogs;
}

export default aggregateLogs;