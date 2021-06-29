import { html, HTML } from '@leafac/html'
import header from './header'

export default (main: HTML): HTML => html`
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>jegan-stock</title>
</head>
<body>
	<header>$${header("jegan-stock")}</header>
	<main>$${main}</main>
</body>
</html>
`.trim()