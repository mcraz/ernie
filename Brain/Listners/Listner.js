const _ = require('lodash')

class Listner
{
	constructor(res) {
		this.res = res
		this.reply = (...m) => res.reply(...m)
	}

	static register(robot) {
		console.log('Listner:register [' + this.name + ']')
		
		if (this.respond)
			this.registerListner(robot, 'respond', this.respond)

		if (this.hear)
			this.registerListner(robot, 'hear', this.hear)
	}

	static registerListner(robot, type, patterns) {
		patterns = _.isArray(patterns) ? patterns : [patterns]
		
		for (let pattern of patterns) {
			robot[type](pattern, res => this.makeHandler(res))
		}
	}

	static makeHandler(res) {
		return (new this(res)).handle()
	}
}

module.exports = Listner