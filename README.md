# Podcast Search API

[![Build Status](https://travis-ci.org/Gleider/podcast-search.svg?branch=master)](https://travis-ci.org/Gleider/podcast-search) [![Coverage Status](https://coveralls.io/repos/github/Gleider/podcast-search/badge.svg?branch=master)](https://coveralls.io/github/Gleider/podcast-search?branch=master)

This API serves to search podcasts and informations about it.
Uses metadata from [Gpoddernet](https://gpodder.net).

## Browser Support

This library relies on [Fetch API](https://fetch.spec.whatwg.org/). And this API is supported in the following browsers.

![Chrome](https://cloud.githubusercontent.com/assets/398893/3528328/23bc7bc4-078e-11e4-8752-ba2809bf5cce.png) | ![Firefox](https://cloud.githubusercontent.com/assets/398893/3528329/26283ab0-078e-11e4-84d4-db2cf1009953.png) | ![Opera](https://cloud.githubusercontent.com/assets/398893/3528330/27ec9fa8-078e-11e4-95cb-709fd11dac16.png) | ![Safari](https://cloud.githubusercontent.com/assets/398893/3528331/29df8618-078e-11e4-8e3e-ed8ac738693f.png) | ![IE](https://cloud.githubusercontent.com/assets/398893/3528325/20373e76-078e-11e4-8e3a-1cb86cf506f0.png) | 
--- | --- | --- | --- | --- |
39+ ✔ | 42+ ✔ | 29+ ✔ | 10.1+ ✔ | Nope ✘ |

## Dependencies

This library depends on [fetch](https://fetch.spec.whatwg.org/) to make requests to the Gpoddernet API. For environments that don't support fetch, you'll need to provide a [polyfill](https://github.com/github/fetch) to browser or [polyfill](https://github.com/bitinn/node-fetch) to Node.

## Instalation

```sh
$ npm install podcast-search --save
```
## How to use

### ES6

```js
//to import a specific method
import { method } from 'podcast-search';

//to import everything
import * as podcastSearch from 'podcast-search';
```

### CommonJS

```js
var podcastSearch = require('podcast-search');
```

### UMD in Browser

```
<!-- to import non-minified version -->
<script src="podcast-search.umd.js"></script>

<!-- to import minified version -->
<script src="podcast-search.umd.min.js"></script>
```

## Methods

Follow the methods that the library provides.

### search(query)

Search for podcasts with provided query.

#### Arguments

|  Argument   |  Type  |    Options     |
| ----------- | ------ | -------------- |
| query       | string | 'Search query' |

#### Return
A promise object containing a list of podcasts data.
##### data[i]

###### .title
A title of podcast.

###### .url
URL to feed of podcast.

###### .website
Website of podcast.

###### .description
A description about the podcast.

###### .logo_url
A image that represents the podcast.

###### .mygpo_link
A link to mygpo page podcast

###### .scaled_logo_url
A link to mygpo scaled imagem that represents the podcast.

###### .subscribers:
Quantity of users that subscribed the podcast.

###### .subscribers_last_week
Quantity of users that subscribed the podcast in last week.

#### Example
```
podcastSearch.search('nerdcast')
  .then(data => {
    console.log(data[0].description);
  }); 
  // print: 'O mundo vira piada no Jovem Nerd'.
```

### top(qtd)

List top podcasts.

#### Arguments

|  Argument   |  Type  |    Options       |
| ----------- | ------ | ---------------- |
| qtd         |  int   | 'Quantity query' |

#### Return
A promise object containing a list of top podcasts.
The functions are the same that the search method.

#### Example

```
podcastSearch.top(5)
  .then(data => {
    for(let i = 0; i < 5; i++){
      console.log(data[i].title);
    }
  });
  // print 5 top podcasts of the moment.
  ```

## License

The MIT License (MIT)
Copyright (c) 2018 Gleider Mackedanz

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.