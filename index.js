const { Database, sql } = require('@leafac/sqlite')
const database = new Database('stock.db')
const howManyMigrationsRan = database.pragma("user_version", { simple: true })

const migrations = [
	()=>{
		console.log("migration 1")
		database.execute( sql`
			CREATE TABLE IF NOT EXISTS "todos" (
				"id" INTEGER PRIMARY KEY AUTOINCREMENT,
				"todo" TEXT NOT NULL,
				"isDone" INTEGER DEFAULT 0);
		` ),
		database.run( sql`INSERT INTO "todos" ("todo") VALUES (${"connect to sqlite3"});` )
		console.log( database.all( sql`SELECT * FROM "todos"` ) )
	},

	()=>{
		const seeds = [
			{ product: "lighter", materials: ["blank", "art", "laminate", "bag"] },
			{ product: "thank-you", materials: ["card","envelope"] },
			{ product: "parcel", materials: ["mailer","business-card","miniprint", "sticker1", "sticker2"] }
		]

		console.log("migration 2.1")
		database.execute( sql`
			CREATE TABLE IF NOT EXISTS "product-material" (
				"id" INTEGER PRIMARY KEY AUTOINCREMENT,
				"name" TEXT NOT NULL,
				"material" TEXT NOT NULL);`,
		)
		seeds.map( seed => {
			let product = seed.product
			seed.materials.map( material => {
				database.run( sql`INSERT INTO "product-material" ("name","material") VALUES (${product},${material});` )
			})
		})
		console.log( database.all( sql`SELECT * FROM "product-material"` ) )

		console.log("migration 2.2")
		database.execute( sql`
			CREATE TABLE IF NOT EXISTS "quantity" (
				"id" INTEGER PRIMARY KEY AUTOINCREMENT,
				"name" TEXT NOT NULL,
				"quantity" INTEGER DEFAULT 0);`,
		)
		seeds.map( seed => {
			let quantity = [seed.product]
			seed.materials.map( material => quantity.push(material) )
			quantity.map( ea => {
				database.run( sql`INSERT INTO "quantity" ("name") VALUES (${ea})` )
			})
		})
		console.log( database.all( sql`SELECT * FROM "quantity"` ) )
	}
]

database.executeTransaction(()=>{
	for (const migration of migrations.slice(howManyMigrationsRan))
		migration()
	database.pragma(`user_version = ${migrations.length}`)
})