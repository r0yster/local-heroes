const router = require('express').Router();

const pagesRouter = require('./pages');
const authRouter = require('./auth');

//Define Routes
router.use('/', pagesRouter);
router.use('/auth', authRouter);

module.exports = router;
