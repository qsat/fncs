module.exports = function always(VALUE) {
  return function() { return VALUE; };
} 
