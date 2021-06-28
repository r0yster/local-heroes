const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const locationRoutes = require('./location-routes');
const userRoutes = require('./user-routes');
const venueRoutes = require('./venue-routes.js');

router.use('/categories', categoryRoutes);
router.use('/location', locationRoutes);
router.use('/user', userRoutes);
router.use('/venue', venueRoutes);

module.exports = router;