const User = require('./User');
const UserInterests = require('./UserInterests');
const Category = require('./Category');
const City = require('./City');
const UserCities = require('./UserCities');

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

module.exports = {
    User,
    Category,
    UserInterests,
    City,
    UserCities
};
