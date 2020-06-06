const helpers = require('../helpers/index');

exports.calculate = (req, res, next) => {
	const { layers, scenario_id } = req.problem;
	const { inks } = req;
	// loop through layers array for each color

	let results = layers.reduce((answers, current, currentIndex) => {
		const { color, volume } = layers[currentIndex];

		for(let ink of inks) {
			let inkColor = ink.color;
			let disparity = helpers.getDistance(color, inkColor);

			if(disparity){
				let cost = ink.cost;
				let totalCost = cost * volume;

				if(totalCost >= 40) {
					// check for existence
					// if not, add to cache
					// if yes and is less than disparity, do nothing
					// if yes and is > disparity, update cache
					if(helpers.cache.has(color)) {
						if(helpers.cache.get(color) > disparity){
							helpers.cache.set(color, disparity)
						}
					} else {
						helpers.cache.set(color, disparity)
					}
				} else {
					continue;
				}
				res.json(disparity);
			} else {
				continue;
			}
		}		
	}, [])

	res.json({
		scenario_id,
		answers: results
	})
}
