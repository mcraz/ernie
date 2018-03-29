const App = require('../App')
const Listner = require('./Listner')

class ExampleListner extends Listner
{

	static get respond() {
		return /example (.*)/i
	}

	handle() {
		const example = this.res.match[1];
		
		return this.reply('Example: ', example)
	}

}

module.exports = ExampleListner