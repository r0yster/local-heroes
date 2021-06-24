const router = require('express').Router();

const homeRoutes = require('./pages');
const auth = require('./auth');

router.use('/', homeRoutes);
router.use('/auth', auth);

router.use((req, res) => {
    res.status(404).end();
})

module.exports = router;