var _ = require("underscore")
  , construct = require("./construct");

module.exports = function partial1(fun, arg1) {

  return function(/* args */) {
    var args = construct(arg1, arguments);
    return fun.apply(fun, args);
  };

}
