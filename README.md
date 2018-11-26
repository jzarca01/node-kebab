# node-kebab

Un wrapper d'API pour kebab-frites.info

## Usage

```js
const Kebab = require('node-kebab')
const kebab = new Kebab()
```

### Get popular

```js
kebab.getPopular()

/*
{ 
    id: 10,
    title: 'Les délices d\'amour',
    location: '10 avenue Jean Jaurès - 75019 Paris 19',
    url: 'https://www.kebab-frites.com/kebab/les-delices-damour-paris-19.html',
    notation: '4.5/6',
    img: 'https://cdn.kebab-frites.com/7/31/1405949837-9320-les-delices-70.JPG' 
}
*/
```