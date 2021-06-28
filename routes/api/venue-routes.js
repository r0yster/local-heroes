const router = require('express').Router();
const { Venue } = require('../../models');

router.get('/', (req, res) => {
    Venue.findAll({

    })
    .then(dbVenueData => res.json(dbVenueData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req, res) => {
    Venue.findOne({
        where: {
            id: req.params.id
        }
    })
    .then(dbVenueData => res.json(dbVenueData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;