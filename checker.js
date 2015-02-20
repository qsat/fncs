var _ = require("underscore");

module.exports = function checker(/* validators */) {
  var validators = _.toArray(arguments);
  return function(obj) {
    return _.reduce(validators, function(errs, check) {
      if (check(obj)) return errs;
      else return _.chain(errs).push(check.message).value();
    }, []);
  };
}

/*

function aMap(obj) { reutrn _.isObject(obj); }

var checkCommand = checker( validator(
  "マップデータである必要があります"
  , aMap
));

checkCommand({});
// => []

checkCommand(42);
// => [ "マップデータである必要があります" ]

*/
