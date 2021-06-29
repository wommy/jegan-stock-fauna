// import { Database, sql } from '@leafac/sqlite'
// const database = new Database('./db/stock.db')
// const getStock = database.all( sql`SELECT * from "quantity"` )
// import getStock from '../db/index.js'
import { html, HTML } from '@leafac/html'

interface Quantity {
	id: Number;
	name: String;
	quantity: Number;
}

export default (getStock: Array<Quantity>): HTML => html`
	$${getStock.map( row => `<tr>
		<td>${row.id}</td>
		<td>${row.name}</td>
		<td>${row.quantity}</td>
	</tr>`)}
`.trim()
