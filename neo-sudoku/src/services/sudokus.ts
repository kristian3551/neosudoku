const sudokusURL : string = 'http://localhost:8000/api/sudoku';
const userURL : string = 'http://localhost:8000/api/user';

const getAll : () => Promise<any> = () => {
    return fetch(`${sudokusURL}`);
}

const getOne : (id: string) => Promise<any> = (id) => {
    return fetch(`${sudokusURL}/${id}`);
}

const getRandomByDifficulty : (difficulty: 'easy' | 'medium' | 'hard' | 'expert') => Promise<any> = (difficulty) => {
    return fetch(`${sudokusURL}/random/${difficulty}`);
}

const create : (date: string, matrix:string, rating: number, 
    difficulty:string, type: string) => Promise<any> = (date, matrix, rating, difficulty, type) => {
        return fetch(`${sudokusURL}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                date, matrix, rating, difficulty, type
            })
        })
}

const setCurrentSudoku = (currentSudoku: Object | null, userId: string) => {
    return fetch(`${userURL}/setCurrentSudoku/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            currentSudoku
        })
    });
}

const addSudokuToSolved = (userId: string, date: Date, 
    difficulty: string, type: string, ratingPoints: number) => {
    return fetch(`${userURL}/addSudokuToSolved/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            date, difficulty, type, ratingPoints
        })
    });
}

const setRating = (userId: string, type: string, ratingPoints: number) => {
    return fetch(`${userURL}/setRating/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ type,  ratingPoints })
    })
}

const solveSudoku : (matrix : Array<Array<number>>) => Promise<any>
    = (matrix) => {
        return fetch(`${sudokusURL}/solve`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                matrix
            })
        })
    }

const sudokuApi = { getAll, getOne, getRandomByDifficulty, create, 
    setCurrentSudoku, addSudokuToSolved, setRating, solveSudoku };

export default sudokuApi;
