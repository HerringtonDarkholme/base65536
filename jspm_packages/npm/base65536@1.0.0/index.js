/* */ 
(function(Buffer) {
  require('string.fromcodepoint');
  require('string.prototype.codepointat');
  var get_block_start = require('./get-block-start.json!systemjs-json');
  var get_b2 = require('./get-b2.json!systemjs-json');
  var NO_BYTE = -1;
  module.exports = {
    encode: function(buf) {
      var strs = [];
      for (var i = 0; i < buf.length; i += 2) {
        var b1 = buf[i];
        var b2 = i + 1 < buf.length ? buf[i + 1] : NO_BYTE;
        var codePoint = get_block_start[b2] + b1;
        var str = String.fromCodePoint(codePoint);
        strs.push(str);
      }
      return strs.join("");
    },
    decode: function(str) {
      var bufs = [];
      var done = false;
      for (var i = 0; i < str.length; i++) {
        var codePoint = str.codePointAt(i);
        var b1 = codePoint & ((1 << 8) - 1);
        var b2 = get_b2[codePoint - b1];
        if (b2 === undefined) {
          throw new Error("Not a valid Base65536 code point: " + String(codePoint));
        }
        var buf = b2 === NO_BYTE ? new Buffer([b1]) : new Buffer([b1, b2]);
        if (buf.length === 1) {
          if (done) {
            throw new Error("Base65536 sequence continued after final byte");
          }
          done = true;
        }
        bufs.push(buf);
        if (codePoint >= (1 << 16)) {
          i++;
        }
      }
      return Buffer.concat(bufs);
    }
  };
})(require('buffer').Buffer);
