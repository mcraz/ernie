const _ = require('lodash');
const listners = require('../Brain/Listners');

module.exports = (robot) => {
	for (let listner of listners) {
		listner.register(robot)
	}
}