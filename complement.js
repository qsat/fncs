var _ = require("underscore");

module.exports = function complement(pred) {
  return function() {
    return !pred.apply(null, _.toArray(arguments));
  };
}
