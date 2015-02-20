module.exports = function has(obj, key) {
  return obj != null && Object.prototype.hasOwnProperty.call(obj, key);
};
