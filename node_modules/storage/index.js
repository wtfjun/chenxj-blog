/*!
 * storage <https://github.com/jonschlinkert/storage>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT license.
 */

'use strict';

/**
 * Expose `storage`
 */

module.exports = Storage;

function Storage(cache) {
  this.cache = cache || {};
}

Storage.prototype.set = function(key, value) {
  this.cache[key] = value;
  return this;
};

Storage.prototype.get = function(key) {
  return this.cache[key];
};