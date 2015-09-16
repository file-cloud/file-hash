#  [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

> File hash for file-cloud


## Install

```sh
$ npm install --save file-hash
```


## Usage

```js
var fileHash = require('file-hash');
var path = require('path');

fileHash(function (hash) {
  //result, false if error occur
  //'0bfc0089cda3279444f72428f0f940a3ebfdc7f8'
  }, 
  //resolvable path
  path.resolve(__dirname, 'a.txt'),
 //type of algorithm
 'sha1',
  //upper or not, lower is default
  true
  );

    
```

```sh
$ npm install --global file-hash
$ fash --help
$ fash  a.txt 
//9a3f2bdd77e0bd4c87e954e154f05d525c85f844
$ fash a.jpg --type md5
//969996c794949bbf0e40827cefc98f2d
$ fash a.jpg --type md5 --case upper
//969996C794949BBF0E40827CEFC98F2D

```


## License

MIT © [calidion](blog.3gcnbeta.com)


[npm-image]: https://badge.fury.io/js/file-hash.svg
[npm-url]: https://npmjs.org/package/file-hash
[travis-image]: https://travis-ci.org/JSSDKCN/file-hash.svg?branch=master
[travis-url]: https://travis-ci.org/JSSDKCN/file-hash
[daviddm-image]: https://david-dm.org/JSSDKCN/file-hash.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/JSSDKCN/file-hash
