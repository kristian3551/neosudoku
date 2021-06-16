const calculateRating : (userRating: number, sudokuRating: number, 
    countOfSolvedSudokus: number) => number 
        = (userRating, sudokuRating, countOfSolvedSudokus) => {
        let rating : number = 1500;
        if(userRating < 1500) return sudokuRating / 10;
        else if(userRating >= 1500 && userRating <= 2000) return sudokuRating / 15;
        else return sudokuRating / countOfSolvedSudokus;
}

export default calculateRating;