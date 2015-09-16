#!/usr/bin/env node
'use strict';
var meow = require('meow');
var path = require('path');
var fileHash = require('./');

var cli = meow({
  help: [
    'Usage',
    '  fash filename [--type sha1] [--case upper]',
    '',
    'Example',
    '  fash a.jpg --type md5',
    '  fash a.jpg --type sha1 --case upper'
  ].join('\n')
});
fileHash(function(hash) {
  console.log(hash);
}, path.resolve(process.env.PWD, cli.input[0]), cli.flags.type, cli.flags.case === 'upper');
