const User = require('./User');
const UserInterests = require('./UserInterests');
const UserVenues = require('./UserVenues');
const Category = require('./Category');
const Location = require('./Location');
const Venue = require('./Venue');
const VenueCategory = require('./VenueCategory');
const VenueLocation = require('./VenueLocation');

// User.belongsTo(Location, {
//     foreignKey: 'city'
// });

// Location.hasMany(User, {
//    foreignKey: 'city'
// });

// User.belongsToMany(Category, {
//     through: UserInterests,
//     as: 'interests',
//     foreignKey: 'id'
// });

// Category.belongsToMany(User, {
//    through: UserInterests,
//     as: 'category',
//     foreignKey: 'id'
// });

// User.belongsToMany(Venue, {
//     through: UserVenues,
//     as: 'venue_list',
//     foreignKey: 'id'
// });

// Venue.belongsToMany(User, {
//     through: UserVenues,
//     as: 'visted_users',
//     foreignKey: 'id'
// });

// Venue.belongsToMany(Category, {
//     through: VenueCategory,
//     as: 'category_id',
//     foreignKey: 'id'
// });

// Category.belongsToMany(Venue, {
//     through: VenueCategory,
//    as: 'category_id',
//     foreignKey: 'id'
// });

// Venue.belongsToMany(Location, {
//     through: VenueLocation,
//     as: 'venue',
//     foreignKey: 'category'
// });

// Location.belongsToMany(Venue, {
//     through: VenueLocation,
//     as: 'city',
//     foreignKey: 'id'
// });

module.exports = { User, Category, Location, Venue,
                    UserInterests, UserVenues, VenueCategory, VenueLocation };