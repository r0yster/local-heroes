const { City } = require('../models');

const cityData = [
    {
        name: 'Austin',
        // state: 'Texas',
        // zip_code: 73301,
        // latitude: 30,
        // longitude: 97
    },
    {
        name: 'San Antonio',
        // state: 'Texas',
        // zip_code: 78216,
        // latitude: 29,
        // longitude: 98
    },{

        name: 'Colorado Springs',
        // state: 'Colorado',
        // zip_code: 80829,
        // latitude: 38,
        // longitude: 104
    },
    {
        name: 'New York',
        // state: 'New York',
        // zip_code: 10001,
        // latitude: 40,
        // longitude: 74
    }
];

const seedCities = () => City.bulkCreate(cityData);

module.exports = seedCities;