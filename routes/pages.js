const express = require ('express');
const router = express.Router();
const { User } = require('../models');


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
router.get('/interests', (req, res) => {
    //renders handlebars registration
    res.render('interests')
});
router.get('/profile', (req, res) => {
    User.findAll({})
    .then(dbUserData => {
        const users = dbUserData.map(user => user.get({ plain: true }));

        res.render('profile', {
            users
        })
    })
});

module.exports = router;