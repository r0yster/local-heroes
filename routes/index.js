const router = require('express').Router();

const pagesRouter = require('./pages');
const authRouter = require('./auth');
const apiRoutes = require('./api');

//Define Routes
router.use('/', pagesRouter);
router.use('/auth', authRouter);
router.use('/api', apiRoutes);

module.exports = router;
