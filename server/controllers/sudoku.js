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
    getRandomByType: (req, res, next) => {
        const type = req.params.type;
        models.Sudoku.find({ type })
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
        models.Sudoku.updateOne({ _id, id }, {
            date, matrix, rating,
            difficulty, type
        })
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