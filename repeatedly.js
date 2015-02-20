var _ = require("underscore");

module.exports = function repeatedly(times, fun) { 
  return _.map(_.range(times, fun)); 
};
