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

const setCurrentSudoku = (currentSudoku: Object, id: string) => {
    return fetch(`${userURL}/setCurrentSudoku/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(currentSudoku)
    });
}

const addSudokuToSolved = (userId: string, sudokuId: string) => {
    return fetch(`${userURL}/addSudokuToSolved/${userId}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            sudokuId
        })
    });
}

const sudokuApi = { getAll, getOne, getRandomByDifficulty, create, 
    setCurrentSudoku, addSudokuToSolved };

export default sudokuApi;
