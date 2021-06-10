const controllers = require('../controllers/');
const router = require('express').Router();

router.get('/', controllers.user.get);

router.get('/currentSudoku', controllers.user.getUserCurrentSudoku);

router.post('/register', controllers.user.post.register);

router.post('/login', controllers.user.post.login);

router.post('/verify', controllers.user.post.verifyUser);

router.post('/logout', controllers.user.post.logout);

router.put('/editCredentials/:id', controllers.user.put.editCredentials);

router.put('/addBirthDate/:id', controllers.user.put.addBirthDate);

router.put('/addProfilePictureURL/:id', controllers.user.put.addProfilePictureURL);

router.put('/setCurrentSudoku/:id', controllers.user.put.setCurrentSudoku);

router.put('/addSudokuToSolved/:id', controllers.user.put.addSudokuToSolved);

router.put('/setRating/:id', controllers.user.put.setRating);

router.delete('/:id', controllers.user.delete);

module.exports = router;