var _ = require("underscore");

module.exports = function trampoline(fun /*, 任意の数の引数 */) {
  var result = fun.apply(fun, _.rest(arguments));

  while (_.isFunction(result)) {
    result = result();
  }

  return result;
}
