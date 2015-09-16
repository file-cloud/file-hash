'use strict';

module.exports = function (next, filename, type, upper) {
  var fs = require('fs');
  if (!fs.existsSync(filename)) {
    throw Error(filename + " not exists");
  }
  var crypto = require('crypto');
  var hash = crypto.createHash(type || 'sha1');
  var fd = fs.createReadStream(filename);
  hash.setEncoding('hex');
  fd.on('end', function () {
    hash.end();
    if (upper) {
      return     next(hash.read().toUpperCase());
    }
    next(hash.read());
  });
  // read all file and pipe it (write it) to the hash object
  fd.pipe(hash);
};
