# {%= name %} {%= badge("fury") %}

> {%= description %}

{%= include("install-npm", {save: true}) %}

## Run tests

```bash
npm test
```

## Usage

```js
var storage = require('{%= name %}');
```

## API
{%= comments("index.js") %}

## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue]({%= bugs.url %})

## Author
{%= include("author") %}

## License
{%= copyright() %}
{%= license() %}

***

{%= include("footer") %}