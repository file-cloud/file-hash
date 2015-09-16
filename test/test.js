'use strict';
var assert = require('assert');
var fileHash = require('../');

describe('file-hash node module', function () {
  it('should be able to hash a file', function (done) {
    var path = require('path');
    fileHash(function (hash) {
      assert.equal(hash, '0bfc0089cda3279444f72428f0f940a3ebfdc7f8');
      done();
    }, path.resolve(__dirname, 'a.txt'), 'sha1');
  });

  it('should be able to get a capital hash value', function (done) {
    var path = require('path');
    fileHash(function (hash) {
      assert.equal(hash, '0BFC0089CDA3279444F72428F0F940A3EBFDC7F8');
      done();
    }, path.resolve(__dirname, 'a.txt'), 'sha1', true);
  });

  it('should be throw an exception', function (done) {
    var path = require('path');
    try {
      fileHash(function () {
      }, path.resolve(__dirname, 'b.txt'), 'sha1', true);
    } catch (e) {
      assert.equal(true, e instanceof Error);
      assert.equal(true, e.message === path.resolve(__dirname, 'b.txt') + ' not exists');
      done();
    }

  });
});
