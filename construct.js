var _ = require("underscore")
  , cat = require("./cat");

module.exports = function construct(head, tail) {
  return cat([head], _.toArray(tail));
}

/*

construct(42, [1,2,3]);

//=> [42, 1, 2, 3]

 */
