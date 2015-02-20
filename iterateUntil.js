/*

iterateUntil(
  function(n) { return n * 2; }
  , function(n) { return n <= 1024; }
  , 1
);

// => [ 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024 ] 

*/

module.exports = function iterateUntil(fun, check, init) {
  var ret = [];
  var result = fun(init);
  while (check(result)) {
    ret.push(result);
    result = fun(result);
  }
  return ret;
};
