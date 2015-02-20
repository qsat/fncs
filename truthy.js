var existy = require("./existy");

module.exports = function truthy(x) { return (x !== false) && existy(x) };
