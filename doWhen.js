var truthy = require("./truthy");

module.exports = function doWhen(cond, action) {
  if (truthy(cond)) return action();
  else return undefined;
}
