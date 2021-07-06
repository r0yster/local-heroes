const seedCategories = require('./category-seeds');
const seedCities = require('./location-seeds');
// const seedVenues = require('./venue-seeds');
const seedUsers = require('./user-seeds');


const sequelize = require('../config/connection');

const seedAll = async() => {
    console.log('\n----- DATABASE SYNCED -----\n');
    await sequelize.sync({ force: true });

    console.log('\n----- CATEGORIES SEEDED -----\n');
    await seedCategories();

    console.log('\n----- LOCATIONS SEEDED -----\n');
    await seedCities();

    // console.log('\n----- VENUES SEEDED -----\n');
    // await seedVenues();
    console.log('\n----- USERS SEEDED -----\n');
    await seedUsers();

    process.exit(0);
};

seedAll();