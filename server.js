const express = require('express');
const config = require('config');
const path = require('path');

const { appRouter } = require('./src');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src', 'views'));

app.use('/', appRouter);

app.listen(config.get('http.PORT'), () => {
	console.log(`Server has been started on http://localhost:${config.get('http.PORT')}...`)
})
