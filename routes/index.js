const router = require('express').Router();

const pagesRouter = require('./pages');
const authRouter = require('./auth');
const profileRouter = require('./profile');
const { isAuth, retrieveClaims } = require('../middlewares/isAuth');

//Define Routes
router.use('/', pagesRouter);
router.use('/auth', authRouter);
router.use('/profile', isAuth, retrieveClaims,  profileRouter);

module.exports = router;
