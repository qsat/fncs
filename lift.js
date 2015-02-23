var _ = require("underscore")
  , construct = require("./construct");

module.exports = function lift(answerFun, stateFun) {
  return function(/* 任意の数の引数 */) {
    var args = _.toArray(arguments);

    return function(state) {
      var ans = answerFun.apply(null, construct(state, args));
      var s = stateFun ? stateFun(state) : ans;

      return {answer: ans, state: s};
    };
  };
};
