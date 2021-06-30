const express = require ('express');
const router = express.Router();
const { User, Category, City } = require('../models')


router.get('/', (req, res) => {
    //renders handlebars index
    res.render('/index')
});

router.get('/login', (req, res) => {
    //renders handlebars login
    res.render('login')
});

router.get('/register', (req, res) => {
    //renders handlebars registration
    res.render('register')
});

router.get('/userOptions', (req, res) => {
    //renders handlebars registration
    res.render('userOptions')
});

router.get('/interests', async (req, res) => {
    const interests = await Category.findAll();
    const cities = await City.findAll();
    //renders handlebars registration
    res.render('interests', { interests, cities })
});



module.exports = router;