var _ = require("underscore")
  , existy = require("./existy")
  , fail = require("./fail")
  , doWhen = require("./doWhen");

module.exports = function invoker (NAME, METHOD) {
  return function(target /* args ... */) {

    if (!existy(target)) fail("Must provide a target");
    
    var targetMethod = target[NAME];
    var args = _.rest(arguments);
    
    return doWhen(
      (existy(targetMethod) && METHOD === targetMethod),
      function() { return targetMethod.apply(target, args); }
    ); 
  }; 
}
