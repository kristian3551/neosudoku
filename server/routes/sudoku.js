const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.sudoku.get);

router.get('/:id', controllers.sudoku.getOne);

router.get('/byDate/:date', controllers.sudoku.getByDate);

router.get('/random/:difficulty', controllers.sudoku.getRandomByDifficulty);

router.post('/solve', controllers.sudoku.post.getSolvedSudoku);

router.post('/', controllers.sudoku.post.create);

router.put('/:id', controllers.sudoku.put);

router.delete('/:id', controllers.sudoku.delete);

module.exports = router;