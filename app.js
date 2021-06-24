const path = require('path');
const express = require('express');
const cookieParser = require('cookie-parser');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const mysql = require('mysql');
const sequelize = require('./config/connection');

const app = express();
app.use(cookieParser());

const PORT = process.env.PORT || 3301;

app.use(express.json());
//Parsing url encoded bodies (as sent by html forms)
app.use(express.urlencoded({extended: false}));

app.use(routes);

const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));

const hbs = exphbs.create({ });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'hbs');

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening on ' + PORT));
});