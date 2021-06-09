import React from 'react';
import styles from './styles.module.css';

const SudokuGrid : React.FunctionComponent = () => {

    const renderInputs: (arr: Array<number>) => React.ReactNode = (square) => {
        return square.map((e,i) => {
            return (<input key="i" type="text" value={e}/>)
        })
    }

    return (<div className={styles["sudoku-container"]}>
    <div className={styles['big-square']}>
        {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
    <div className={styles['big-square']}>
    {renderInputs([1,2,3,4,5,6,7,8,9])}
    </div>
</div>);
}

export default SudokuGrid;