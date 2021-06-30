const express = require ('express');
const router = express.Router();
<<<<<<< HEAD
const { User } = require('../models');
=======
const { User, Category } = require('../models')
>>>>>>> dab2ac99711d7001180c5f6a2a88bca1aac113c5


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
    //renders handlebars registration
    res.render('interests', { interests })
});

router.get('/profile', (req, res) => {
    User.findAll({})
    .then(dbUserData => {
        const users = dbUserData.map(user => user.get({ plain: true }));
<<<<<<< HEAD

=======
>>>>>>> dab2ac99711d7001180c5f6a2a88bca1aac113c5
        res.render('profile', {
            users
        })
    })
});

<<<<<<< HEAD
=======

>>>>>>> dab2ac99711d7001180c5f6a2a88bca1aac113c5
module.exports = router;