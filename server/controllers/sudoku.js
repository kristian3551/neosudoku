const models = require('../models');

module.exports = {
    get: (req, res, next) => {
        models.Sudoku.find()
            .then((sudokus) => res.send(sudokus))
            .catch(next);
    },
    getOne: (req, res, next) => {
        const id = req.params.id;
        models.Sudoku.findOne({ _id: id })
            .then((sudokuObject) => res.send(sudokuObject))
            .catch(next);
    },
    getByDate: (req, res, next) => {
        const date = req.params.date;
        models.Sudoku.find({ date })
            .then((sudokus) => res.send(sudokus))
            .catch(next);
    },
    getRandomByDifficulty: (req, res, next) => {
        const difficulty = req.params.difficulty;
        models.Sudoku.find({ difficulty })
            .then((sudokus) => {
                const randomSudokuIndex = Math.floor(Math.random() * sudokus.length);
                res.send(sudokus[randomSudokuIndex]);
            })
            .catch(next);
    },
    post: {
        create: (req, res, next) => {
            const { date, matrix, rating, difficulty, type } = req.body;
            models.Sudoku.create({ date, matrix, rating, difficulty, type })
                .then((createdSudoku) => {
                    res.send(createdSudoku);
                })
                .catch(next);
        }
    },
    put: (req, res, next) => {
        const id = req.params.id;
        const { date, matrix, rating, difficulty, type } = req.body;
        let newSudoku = {};
        if(date) newSudoku.date = date;
        if(matrix) newSudoku.matrix = matrix;
        if(rating) newSudoku.rating = rating;
        if(difficulty) newSudoku.difficulty = difficulty;
        if(type) newSudoku.type = type;
        
        models.Sudoku.updateOne({ _id: id }, newSudoku)
            .then((updatedSudoku) => {
                res.send(updatedSudoku);
            })
            .catch(next);
    },
    delete: (req, res, next) => {
        const id = req.params.id;
        models.Sudoku.deleteOne({ _id: id })
            .then((removedSudoku) => res.send(removedSudoku))
            .catch(next);
    }

}