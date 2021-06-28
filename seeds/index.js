const seedCategories = require('./category-seeds');
const seedLocations = require('./location-seeds');
const seedVenues = require('./venue-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true });

    console.log('\n----- DATABASE SYNCED -----\n');
    await seedCategories();

    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedLocations();

    console.log('\n----- LOCATIONS SEEDED -----\n');
    await seedVenues();

    console.log('\n----- VENUES SEEDED -----\n');
    await seedUsers();
    
    console.log('\n----- USERS SEEDED -----\n');

    process.exit(0);
};

seedAll();