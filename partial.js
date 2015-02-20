var _ = require("underscore")
  , cat = require("./cat");


module.exports = function partial(fun /*, 任意の数の引数 */) {
  var pargs = _.rest(arguments);

  return function(/* 引数 */) {
    var args = cat(pargs, _.toArray(arguments));
    return fun.apply(fun, args);
  };
}

