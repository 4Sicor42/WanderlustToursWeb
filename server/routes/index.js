const Router = require('express');
const historyRouter = require('./historyRouter');
const excursionRouter = require('./excursionRouter');
const ratingRouter = require('./ratingRouter');
const userRouter = require('./userRouter');

const router = new Router();

router.use('/user', userRouter);
router.use('/rating', ratingRouter);
router.use('/excursion', excursionRouter);
router.use('/history', historyRouter);
module.exports = router;
