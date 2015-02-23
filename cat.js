var _ = require("underscore")
  , existy = require("./existy");

module.exports = function cat() {
  var head = _.first(arguments);
  if (existy(head)) return head.concat.apply(head, _.rest(arguments));
  else return [];
}

/*

cat([1,2,3], [4,5], [6,7,8]);

//=> [1, 2, 3, 4, 5, 6, 7, 8]

*/
