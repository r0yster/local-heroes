const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Food & Beverage',
    },
    {
        category_name: 'Arts & Culture',
    },
    {
        category_name: 'Music'
    },
    {
        category_name: 'History'
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;