const { Database, sql } = require('@leafac/sqlite')
const database = new Database('stock.db')
const howManyMigrationsRan = database.pragma("user_version", { simple: true })
const migrations = [
	()=>{
		console.log("migration 1")
		database.execute(
			sql`CREATE TABLE IF NOT EXISTS "todos" (
				"id" INTEGER PRIMARY KEY AUTOINCREMENT,
				"todo" TEXT NOT NULL,
				"isDone" INTEGER DEFAULT 0);`,
		),
		database.run(
			sql`INSERT INTO "todos" ("todo") VALUES (${"connect to sqlite3"})`
		)
	},
	()=>{
		console.log("migration 2")
		database.execute(
			sql`CREATE TABLE IF NOT EXISTS "product-material" (
				"id" INTEGER PRIMARY KEY AUTOINCREMENT,
				"name" TEXT NOT NULL,
				"material" TEXT NOT NULL);`,
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"lighter"},${"blank"})`,
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"lighter"},${"art"})`,
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"lighter"},${"laminate"})`,
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"lighter"},${"bag"})`
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"thank-you"},${"card"})`,
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"thank-you"},${"envelope"})`
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"parcel"},${"mailer"})`
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"parcel"},${"business-card"})`,
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"parcel"},${"miniprint"})`
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"parcel"},${"sticker1"})`,
		),
		database.run( 
			sql`INSERT INTO "product-material" ("name","material") VALUES (${"parcel"},${"sticker2"})`
		)
// keith put your code here
	// },
	// ()=>{
	// 	console.log("migration 3")
	// 	database.execute(
	// 		sql``,
	// 	),
	// 	database.run( 
	// 		sql``,
	// 	)
	}
]
database.executeTransaction(()=>{
	for (const migration of migrations.slice(howManyMigrationsRan))
		migration()
	database.pragma(`user_version = ${migrations.length}`)
})

const todos = database.all( sql`SELECT "todo" FROM "todos"` )
console.log(todos)
const products = database.all( sql`SELECT * FROM "product-material"` )
console.log(products)
