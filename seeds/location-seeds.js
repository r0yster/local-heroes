const { City } = require('../models');

const cityData = [
    {
        name: 'Austin',
    },
    {
        name: 'San Antonio',
    },{
        name: 'Colorado Springs',
    },
    {
        name: 'New York',
    }
];

const seedCities = () => City.bulkCreate(cityData);

module.exports = seedCities;