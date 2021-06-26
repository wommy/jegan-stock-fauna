// const axios = require('axios')
// require('dotenv').config()
// module.exports = async function() {}
const DB = require('better-sqlite3')
const db = new DB('stock.db', { verbose: console.log })

module.exports = db
	// .prepare('DROP TABLE todos')
	// .prepare(`CREATE TABLE "todos" (
	// 	"id"	INTEGER NOT NULL UNIQUE,
	// 	"todo"	TEXT NOT NULL,
	// 	"isComplete"	INTEGER DEFAULT 0,
	// 	PRIMARY KEY("id" AUTOINCREMENT)
	// );`)
	// .run()
	// .prepare('INSERT INTO todos VALUES(null,@todo,0)')
	// .run({todo: 'put todos'})
	// .exec(`SELECT * FROM todos`)
	// .close()
