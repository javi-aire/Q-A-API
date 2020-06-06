const express = require('express');
const path = require('path');
const qAndARoutes = require('./routes');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/get', qAndARoutes);

app.use('/', (req, res) => {
	res.sendStatus(200).json({
		'hello': 'world'
	})
})

module.exports = app;