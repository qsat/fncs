var _ = require("underscore")
  , partial1 = require("./partial1");
  , repeatedly = require("./repeatedly");

module.exports = function randString(len) {
  var ascii = repeatedly(len, partial1(partial1(_.random, 1), 36));

  return _.map(ascii, function(n) {
    return n.toString(36);
  }).join('');
}

