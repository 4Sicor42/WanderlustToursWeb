const Router = require('express');
const ratingController = require('../controllers/ratingController');

const router = new Router();

router.post('/:id', ratingController.addRating);
router.get('/:id', ratingController.getRating);

module.exports = router;
