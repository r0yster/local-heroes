const { QueryTypes } = require('sequelize');
const express = require ('express');
const router = express.Router();
const sequelize = require('../config/connection.js');

const { User, Category, UserInterests, UserCities } = require('../models')

// [GET] /profile
router.get('/', async (req, res) => {
    const userId = req.user.id;
    const users = await sequelize.query(`
        SELECT user_id, user.first_name, user.last_name FROM 
            (SELECT DISTINCT user_id FROM UserInterests WHERE category_id IN (
                SELECT DISTINCT category_id FROM UserInterests WHERE user_id = ${userId}
            ) AND user_id != ${userId}) user_common_interests
        INNER JOIN user WHERE user.id = user_common_interests.user_id`, { type: QueryTypes.SELECT }
    );
    console.log(users);
    res.render('profile', { users })
});

// [POST] /profile/interests
router.post('/interests', async (req, res) => {
    const body = req.body;
    await UserCities.create({ user_id: req.user.id, city_id: body.cityId });
    for (const interest of body.interests) {
        await UserInterests.create({
            user_id: req.user.id,
            category_id: interest
        });
    }
    res.json({ msg: 'ok' });
});


module.exports = router;