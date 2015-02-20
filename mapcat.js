var _ = require("underscore")
  , cat = require("./cat");

module.exports = function mapcat(fun, coll) {
  return cat.apply(null, _.map(coll, fun));
}
