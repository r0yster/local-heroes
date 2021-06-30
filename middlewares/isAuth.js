const jwt = require('jsonwebtoken');

const isAuth = (req, res, next) => {
    if (req.cookies.jwt) {
        next();
    } else {
        res.redirect('/login');
    }
};

const retrieveClaims = (req, res, next) => {
    try {
        req.user = jwt.verify(req.cookies.jwt, process.env.JWT_SECRET);
        next();
    } catch (err) {
        console.log(err);
        res.status(401).json({ msg: 'Unauthorized'});
    }
};


module.exports = {
    isAuth,
    retrieveClaims
};