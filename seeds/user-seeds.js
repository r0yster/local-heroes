const { User } = require('../models');

const userData = [
    {
        firstName: 'Negin',
        lastName: 'Kalle',
        city: 'Austin',
        state: 'Texas',
        email: 'somar_f@justsvg.com',
        password: 'password123'
    },
    {
        firstName: 'Peter',
        lastName: 'Gyda',
        city: 'San Antonio',
        state: 'Texas',
        email: '8ayoub.lam@tslhgta.com',
        password: 'password123'
    },
    {
        firstName: 'Yaw',
        lastName: 'Hadassah',
        city: 'Colorado Springs',
        state: 'Colorado',
        email: 'raub-hrz5@httsmvk.com',
        password: 'password123'
    },
    {
        firstName: 'Rashmi',
        lastName: 'Honza',
        city: 'New York',
        state: 'New York',
        email: 'mwiseem20162@fb2t.site',
        password: 'password123'
    },
    {
        firstName: 'Saar',
        lastName: 'Lynette',
        city: 'Peaches',
        state: 'Georgia',
        email: 'anovan_modern7@ecallen.com',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;