const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { User } = require('../models/index');

// [POST] /auth/register
router.post('/register', async (req, res) => {
	const { firstName, lastName, email, password, passwordConfirm, city, state } = req.body;

	try {
		// one person with one email should be able to register one time -- future sequelize relationships to be made here
		const user = await User.findOne({
			attributes: { exclude: ['password'] },
			where: { email },
		});
		if (user) {
			return res.render('register', {
				message: 'The email is already in use.',
			});
			// This can take place before the SQL call.
		} else if (password !== passwordConfirm) {
			return res.render('register', {
				message: 'Passwords do not match.',
			});
		}

		await User.create({
			email,
			firstName,
			lastName,
			city,
			state,
			// Password is passed as plaintext, because it
			// is handled by beforeCreate hook of Sequelize model.
			password,
		});

		return res.render('register', {
			message: 'User registered',
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// [POST] /auth/login
router.post('/login', async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email || !password) {
			return res.status(400).render('login', {
				message: 'Please provide an email and password.',
			});
		}

		const user = await User.findOne({ where: { email } });
		if (!user) {
			return res.status(401).render('login', {
				message: 'No user with such email',
			});
		}

		const areEqual = user.checkPassword(password);
		if (!areEqual) {
			return res.status(401).render('login', {
				message: 'The email or password is incorrect',
			});
		}

		const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
			expiresIn: process.env.JWT_EXPIRES_IN,
		});

		console.log(`The token is ${token}`);

		const cookieOptions = {
			expires: new Date(Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
			httpOnly: true,
		};

		res.cookie('jwt', token, cookieOptions);

		//redirect here
		res.status(200).redirect('/userOptions');
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

module.exports = router;
