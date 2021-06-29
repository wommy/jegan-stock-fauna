import { html, HTML } from '@leafac/html'

export default (name: string): HTML => html`
	<h1>$${name}</h1>
`.trim()
