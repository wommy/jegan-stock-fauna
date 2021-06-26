const { Database, sql } = require('@leafac/sqlite')

const database = new Database('stock.db')

database.execute(
	sql`CREATE TABLE IF NOT EXISTS "todos" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "todo" TEXT NOT NULL, "isDone" INTEGER DEFAULT 0);`
)

database.run( 
	sql`INSERT INTO "todos" ("todo") VALUES (${"connect to sqlite3"})`
)

// const todos = database.all( sql`SELECT "todo" FROM "todos"` )
// console.log(todos)