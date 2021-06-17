const calculateRating : (userRating: number, sudokuRating: number, 
    countOfSolvedSudokus: number, hintsCount: number) => number 
        = (userRating, sudokuRating, countOfSolvedSudokus, hintsCount) => {
            let rating : number;
        if(userRating < 1500) rating = sudokuRating / 10;
        else if(userRating >= 1500 && userRating <= 2000) rating = sudokuRating / 15;
        else rating = sudokuRating / (10 * countOfSolvedSudokus);
        rating = rating - hintsCount * 10;
        return rating;
}

export default calculateRating;