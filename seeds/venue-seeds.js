const { Venue } = require('../models');

const venueData = [
    {
        category: 'Food & Beverage',
        name: 'Gustavos fried chcicken',
        city: 'Austin',
        rating: 5
    },
    {
        category: 'Arts & Culture',
        name: 'Witte Musuem',
        city: 'San Antonio',
        rating: 4
    },
    {
        category: 'Music',
        name: 'Rumble',
        city: 'Colorado Springs',
        rating: 3
    },
    {
        category: 'Music',
        name: 'Jazzy Nights',
        city: 'Austin',
        rating: 1
    },
    {
        category: 'Arts & Culture',
        name: 'Central Park',
        city: 'New York',
        rating: 5
    }
];

const seedVenues = () => Venue.bulkCreate(venueData);

module.exports = seedVenues;