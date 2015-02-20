var _ = require("underscore")
  , existy = require("./existy");

module.exports = function fnull(fun /*, default value */) { 
   var defaults = _.rest(arguments); 
   return function(/* args */) { 
     var args = _.map(arguments, function(e, i) { 
       return existy(e) ? e : defaults[i]; 
     }); 
     return fun.apply(null, args); 
   }; 
 }
