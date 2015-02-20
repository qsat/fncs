var _ = require("underscore");

module.exports = function orify(/* 任意の数のプレディケート関数 */) {
  var preds = _.toArray(arguments);

  return function(/* 任意の数の引数 */) {
    var args = _.toArray(arguments);

    var something = function(ps, truth) {
      if (_.isEmpty(ps))
        return truth;
      else
        return _.some(args, _.first(ps))
            || something(_.rest(ps), truth);
    };
    return something(preds, false);
  };
}

