const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const mysql = require('mysql');
const sequelize = require('./config/connection');

const app = express();


const PORT = process.env.PORT || 3301;

const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));


//Parsing url encoded bodies (as sent by html forms)
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'hbs');

app.use(routes);

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening on ' + PORT));
});