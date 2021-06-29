const express = require ('express');
const router = express.Router();
const { User, Category, UserInterests } = require('../models')

// [POST] /profile/interests
router.post('/interests', async (req, res) => {
    const body = req.body;
    for (const interest of body.interests) {
        await UserInterests.create({
            user_id: req.user.id,
            category_id: interest
        });
    }
    res.json({ msg: 'ok' });
});



module.exports = router;