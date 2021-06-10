const controllers = require('../controllers');
const router = require('express').Router();

router.get('/', controllers.article.get);

router.get('/:id', controllers.article.getOne);

router.post('/', controllers.article.post.create);

router.put('/:id', controllers.article.put);

router.delete('/:id', controllers.article.delete);

module.exports = router;