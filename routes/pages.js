const express = require ('express');
const router = express.Router();


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
router.get('/localHero', (req, res) => {
    //renders handlebars registration
    res.render('localHero')
});
router.get('/tourist', (req, res) => {
    //renders handlebars registration
    res.render('tourist')
});


module.exports = router;