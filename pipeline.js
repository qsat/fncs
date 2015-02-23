var _ = require("underscore");

module.exports = function pipeline(seed /*, 任意の数の関数 */) {
  return _.reduce(_.rest(arguments),
    function(l,r) { return r(l); },
    seed);
};
