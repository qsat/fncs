var _ = require("underscore")
  , fnull = require("./fnull");

/*
 
function doSomething(config) { 
  var lookup = defaults({critical: 108});
  return lookup(config, 'critical'); 
}

doSomething({critical: 9}); //=> 9 
doSomething({}); //=> 108 

*/


module.exports = function defaults(d) { 
  return function(o, k) { 
    var val = fnull(_.identity, d[k]);
    return o && val(o[k]); 
  }; 
};
