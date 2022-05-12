const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session')

const config = require('config');
const { appRouter } = require('./src');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));
app.set('trust proxy', 1);

app.use(express.static('public'));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

app.use(session({
	secret: config.get('session.secret'),
	resave: false,
	saveUninitialized: true
}))

app.use('/', appRouter);

app.listen(config.get('http.PORT'), () => {
	console.log(`Server has been started on http://localhost:${config.get('http.PORT')}...`)
})
