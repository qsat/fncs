var _ = require("underscore")
  , mapcat = require("./mapcat");

module.exports = function condition1(/* 1つ以上の検証関数 */) {

  var validators = _.toArray(arguments);

  return function(fun, arg) {
    var errors = mapcat(function(isValid) {
      return isValid(arg) ? [] : [isValid.message];
    }, validators);

    if (!_.isEmpty(errors))
      throw new Error(errors.join(", "));

    return fun(arg);
  };

}
