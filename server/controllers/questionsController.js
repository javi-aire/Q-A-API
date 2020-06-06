const fetch = require('node-fetch');
const helpers = require('../helpers/index');


exports.getQuestions = async (req, res, next) => {
	const response = await fetch('http://challenge.teespring.com/v1/question/practice', {
		headers: {
			'Auth-Token': process.env.AUTH_TOKEN
		}
	});

	const questions = await response.json();
	req.problem = {
		scenario_id: questions.scenario_id,
		layers: questions.questions[0].layers
	}

	next();
	// res.json(req.questions);
}