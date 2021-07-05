const { QueryTypes, Op, Sequelize } = require('sequelize');
const express = require ('express');
const router = express.Router();
const sequelize = require('../config/connection.js');

const { User, Category, UserInterests, UserCities } = require('../models');
const { raw } = require('express');

// [GET] /profile
router.get('/', async (req, res) => {

    const currUserId = req.user.id;
    let currInterestsArr = [];
    let matchedUserInterestsArr = [];

    const currUser = await User.findOne({
        where: {
            id: currUserId
        }
    })

    const currCity = await UserCities.findOne({
        attributes: [
            'city_name'
        ],
        where: {
            user_id: currUserId
        },
        raw: true
    });

    const currInterests = await UserInterests.findAll({
        attributes: [
            'category_id'
        ],
        where: {
            user_id: currUserId
        },
        raw: true
    });

    for (const interest of currInterests) {
        currInterestsArr.push(interest.category_id);
    };

    const matchedUserInterests = await UserInterests.findAll({
        attributes: [
            [Sequelize.fn('DISTINCT', Sequelize.col('user_id')), 'user_id'],
        ],
        where: {
            user_id: {
                [Op.ne]: currUserId
            },
            category_id: {
                [Op.in]: currInterestsArr
            }
        },
    });

    for (const userid of matchedUserInterests) {
        matchedUserInterestsArr.push(userid.user_id);
    }

    // console.log('===================Matched Users=========================');
    const matchedUsers = await User.findAll({
        where: {
            [Op.and]: [{
                city: currCity.city_name
            },
            {
                id: {
                    [Op.in]: matchedUserInterestsArr
                }
            }]
        }
    });
    // console.log(JSON.stringify(currUser));
    res.render('profile', { matchedUsers, currUser });
});

// [POST] /profile/interests
router.post('/interests', async (req, res) => {
    const body = req.body;
    const checkUser = await UserCities.findOrCreate({ where: { user_id: req.user.id }});

    if (checkUser[0].isNewRecord) {
        await UserCities.create({ 
            user_id: req.user.id, 
            city_name: body.cityId });
    } else {
        await UserCities.update({ city_name: body.cityId }, {
            where: {
                user_id: req.user.id
            }
        });
    }

    await UserInterests.destroy({
        where: {
            user_id: req.user.id
        }
    });

    for (const interest of body.interests) {
        await UserInterests.create({
            user_id: req.user.id,
            category_id: interest
        });
    };

    res.json({ msg: 'ok' });
});


module.exports = router;