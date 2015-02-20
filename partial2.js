var _ = require("underscore")
  , cat = require("./cat");

module.exports = function partial2(fun, arg1, arg2) {

  return function(/* args */) {
    var args = cat([arg1, arg2], arguments);
    return fun.apply(fun, args);
  };

}
