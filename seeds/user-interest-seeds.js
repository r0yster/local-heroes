const { UserInterests } = require('../models');
const { bulkCreate } = require('../models/UserInterests');

const userInterestData = [
    {
        category_id: 1,
        user_id: 1
    },
    {
        category_id: 2,
        user_id: 1
    },
    {
        category_id: 3,
        user_id: 1
    },
    {
        category_id: 4,
        user_id: 1
    },
    {
        category_id: 1,
        user_id: 2
    },
    {
        category_id: 3,
        user_id: 2
    },
    {
        category_id: 2,
        user_id: 3
    },
    {
        category_id: 4,
        user_id: 3
    },
    {
        category_id: 1,
        user_id: 4
    },
    {
        category_id: 4,
        user_id: 4
    },
    {
        category_id: 2,
        user_id: 5
    },
    {
        category_id: 3,
        user_id: 5
    },
    {
        category_id: 2,
        user_id: 6
    },
    {
        category_id: 1,
        user_id: 6
    }
];

const seedUserInterests = () => UserInterests.bulkCreate(userInterestData);

module.exports = seedUserInterests;