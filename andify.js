var _ = require("underscore");

module.exports = function andify(/* 任意の数のプレディケート関数 */) {
  var preds = _.toArray(arguments);

  return function(/* 任意の数の引数 */) {
    var args = _.toArray(arguments);

    var everything = function(ps, truth) {
      if (_.isEmpty(ps))
        return truth;
      else
        return _.every(args, _.first(ps))
            && everything(_.rest(ps), truth);
    };
    return everything(preds, true);
  };
}
