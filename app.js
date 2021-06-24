const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

dotenv.config({
	path: './.env',
});

const db = mysql.createConnection({
	host: process.env.DATABASE_HOST,
	user: process.env.DATABASE_USER,
	password: process.env.DATABASE_PW,
	database: process.env.DATABASE,
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));

//Parsing url encoded bodies (as sent by html forms)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'hbs');

db.connect((error) => {
	if (error) {
		console.log(error);
	} else {
		console.log('My SQL connected...');
	}
});

//Define Routes
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'))



app.listen(3001);
console.log('Server started on Port 3001');
