const db = require('./Database')

class App 
{
	static query(tableName) {
		return db.table(tableName)
	}
}

module.exports = App;