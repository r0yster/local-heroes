require('dotenv').config();

const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');
const path = require('path');
const app = express();
const cookieParser = require('cookie-parser');

const pagesRouter = require('./routes/pages');

const PORT = process.env.PORT || 3001;

const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));


//Parsing url encoded bodies (as sent by html forms)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'hbs');

//Define Routes
// app.use(express.static(path.join(__dirname, '/views')));
app.get('/', (req, res) => res.render('index.hbs'));
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
	console.log(`Sequelize connected to MySQL successfully.`);
	app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
});
