// import environment variables
require('dotenv').config({ path: 'variables.env' });
// start app
const app = require('./app');
app.set('port', process.env.PORT || 7000);
const server = app.listen(app.get('port'), () => {
	console.log(`Express listening on port ${server.address().port}`);
})

