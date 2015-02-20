/*

var gonnaFail = checker(validator("ZOMG!", always(false)));
console.log(gonnaFail(100));

// => [ "ZOMG!" ] 

*/

module.exports = function validator(message, fun) {
  var f = function(/* args */) {
    return fun.apply(fun, arguments);
  };
  f['message'] = message;
  return f;
}
