import html from '@leafac/html'
import express from "express"
import layout from './components/_layout'
import tableRow from './components/table-row'
// const getStock = require('./db/index')
// import getStock from './db/index.js'

const getStock = [
  { id: 1, name: 'lighter', quantity: 0 },
  { id: 2, name: 'blank', quantity: 0 },
  { id: 3, name: 'art', quantity: 0 },
  { id: 4, name: 'laminate', quantity: 0 },
  { id: 5, name: 'bag', quantity: 0 },
  { id: 6, name: 'thank-you', quantity: 0 },
  { id: 7, name: 'card', quantity: 0 },
  { id: 8, name: 'envelope', quantity: 0 },
  { id: 9, name: 'parcel', quantity: 0 },
  { id: 10, name: 'mailer', quantity: 0 },
  { id: 11, name: 'business-card', quantity: 0 },
  { id: 12, name: 'miniprint', quantity: 0 },
  { id: 13, name: 'sticker1', quantity: 0 },
  { id: 14, name: 'sticker2', quantity: 0 }
]

const app = express()

app.get("/", (req,res) => res.send( layout(html`
<table>
	<tr>
		<th>ID</th>
		<th>NAME</th>
		<th>QUANTITY</th>
	</tr>
	$${tableRow(getStock)}	
</table>
`.trim()),
))

app.listen(8080, () => console.log("running..."))