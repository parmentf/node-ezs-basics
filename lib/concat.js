'use strict';

module.exports = function concat(data, feed) {
  if (this.buffer === undefined) {
    this.buffer = '';
  }
  if (this.isLast()) {
    feed.send(this.buffer);
    feed.close();
  } else {
    this.buffer = this.buffer.concat(data);
    feed.end();
  }
};