# Q-A-API
Teespring tech assessment


## To Run
Install necessary packages w/ `npm i`, then run with `npm start`


### NOTE:
* Only builds with practice question set and builds an array without the `inks` property for each layer.
* Obtained hex-to-rgb conversion method from here: https://stackoverflow.com/a/5624139
* If there was more time, I would have:
	* Added the `inks` property for each layer
	* Refactored `calculate` method to not use an inner for-loop
	* Refactored `calculate` method by separating concerns within if-statements
	* Refactored so that cache was used more efficiently 