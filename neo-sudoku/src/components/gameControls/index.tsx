import React from 'react';
import styles from './styles.module.css';
import sudokuActions from '../../redux/actions/sudoku';
import { connect } from 'react-redux';

const GameControls: React.FunctionComponent<{ 
    setDigit: Function;
    coordinates: Array<number>
 }> = ({ setDigit, coordinates }) => {
    const handleClick = (e: number) => {
        setDigit(e, coordinates[0], coordinates[1]);
    }
    return (<div className={styles["game-controls"]}>
        <div className={styles["options-menu"]}>
            <button type="button">Return</button>
            <button>Delete</button>
            <button>Hint</button>
        </div>
        <div className={styles["digits"]}>
            {[1,2,3,4,5,6,7,8,9].map((e,i) => {
                return (<button key={i} onClick={(e1) => handleClick(e)}>{e}</button>)
            })}
        </div>
        <button>Finish</button>
    </div>)
}

export default connect((state: { currentSudoku: any}) => {
    return {
        coordinates: !!state ? state.currentSudoku.boxOnFocus : [0,0]
    }
}, (dispatch) => {
    return {
        setDigit: (digit: number, i: number, j: number) => dispatch(sudokuActions.setDigit(digit, i, j))
    }
})(GameControls);