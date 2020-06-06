const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const qController = require('../controllers/questionsController')
const inkController = require('../controllers/inksController')
const calculateController = require('../controllers/calculateController')


router.get('/practice/question', 
	qController.getQuestions, 
	inkController.getInks,
	calculateController.calculate)


module.exports = router;