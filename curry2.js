module.exports = function curry2(func) {
  return function(second) {
    return function(first) {
      return func(first, second);
    };
  };
}
