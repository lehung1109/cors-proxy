# Get source code of any site with Javascript

Normally, you can't get source code if the site restrict CORS. The package help you pass it.

## Demo

https://lehung1109.github.io/cors-proxy/demo/

## Documentation

You must call from a context HTTPS.

Just to call ```fetch('https://cors-proxy-wine.vercel.app/api?url={the_url_you_want_to_get}')```

- {the_url_you_want_to_get}: full url. e.g https://www.google.com/

## Example

```js
  fetch('https://cors-proxy-wine.vercel.app/api?url=https://www.google.com/').then(console.log);
```

Have fun!