import React from 'react';
import styles from './styles.module.css';
import sudokuApi from '../../services/sudokus';
import sudokuActions from '../../redux/actions/sudoku';
import { useHistory } from 'react-router-dom';
import { checkSudoku } from '../../utils/checkSudoku';
import calculateRating from '../../utils/calculateRating';
import { connect } from 'react-redux';

interface Props {
    currentSudoku: any;
    user: any;
    setIsSolved: Function;
    addToSolved: Function;
    setSudoku: Function;
    hintsCount: number;
}

const FinishButtons: React.FunctionComponent<Props> = ({ hintsCount, currentSudoku, user,
    setIsSolved, addToSolved, setSudoku }) => {
    
    const history = useHistory();

    const handleFinish = async () => {
        const isSolved = !!currentSudoku.matrix ? checkSudoku(currentSudoku.matrix) : false;
        const date = new Date(currentSudoku.date);
        const ratingPoints = calculateRating(user.ratingsByType[currentSudoku.type],
            currentSudoku.rating, user.solvedSudokus.length, hintsCount);
        if (isSolved) {
            await sudokuApi.addSudokuToSolved(user._id,
                date, currentSudoku.difficulty,
                currentSudoku.type, ratingPoints).catch(err => console.log(err));
            await sudokuApi.setRating(user._id, currentSudoku.type,
                user.ratingsByType[currentSudoku.type] + ratingPoints)
                .catch(err => console.log(err));
            await sudokuApi.setCurrentSudoku(null, user._id)
                .catch(err => console.log(err));
            setIsSolved();
            addToSolved(date, currentSudoku.difficulty,
                currentSudoku.type, ratingPoints);
            setSudoku({});
            history.push('/')
        }
        else {
            console.log('Nope');
        }
    }


    const handleSurrender = async () => {
        const ratingPoints = -20;
        const date = new Date(currentSudoku.date);
        await sudokuApi.addSudokuToSolved(user._id,
            date, currentSudoku.difficulty,
            currentSudoku.type, ratingPoints).catch(err => console.log(err));
        await sudokuApi.setRating(user._id, currentSudoku.type,
            user.ratingsByType[currentSudoku.type] + ratingPoints)
            .catch(err => console.log(err));
        await sudokuApi.setCurrentSudoku(null, user._id)
            .catch(err => console.log(err));
        setIsSolved();
        addToSolved(date, currentSudoku.difficulty,
            currentSudoku.type, ratingPoints);
        setSudoku({});
        history.push('/')

    }
    return (<div className={styles['finish-buttons']}>
        <button className={styles['surrender']} onClick={handleSurrender}><i className="fas fa-times-circle fa-3x"></i></button>
        <button className={styles['finish']} onClick={handleFinish}>Finish</button>
    </div>);
}

export default connect((state: { auth: any; currentSudoku: any; }) => {
    return {
        currentSudoku: state?.currentSudoku,
        user: state?.auth.user
    }
}, (dispatch) => {
    return {
        setIsSolved: () => dispatch(sudokuActions.setIsSolved()),
        addToSolved:
            (date: Date, difficulty: string, type: number, ratingPoints: number) =>
                dispatch(sudokuActions.addSudokuToSolved(date, difficulty, type, ratingPoints)),
        setSudoku: (sudoku: Object) => dispatch(sudokuActions.setSudoku(sudoku))

    }
})(FinishButtons);