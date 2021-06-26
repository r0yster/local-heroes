const User = require('./User');
const Category = require('./Category');
const Location = require('./Location');
const Venue = require('./Venue');

Venue.belongsTo(Category, {
    foreignKey: 'category'
})

module.exports = { User, Category, Location, Venue };