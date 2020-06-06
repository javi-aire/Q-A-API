const fetch = require('node-fetch');
// const helpers = require('../helpers/index');

exports.getInks = async (req, res, next) => {
	const response = await fetch('http://challenge.teespring.com/v1/inks', {
		headers: {
			'Auth-Token': process.env.AUTH_TOKEN
		}
	});

	const { inks } = await response.json();

	req.inks = inks;

	next()
}