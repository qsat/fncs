var _ = require("underscore")
  , existy = require("./existy")
  , construct = require("./construct");

module.exports = function dispatch(/* functions */){
  var funs = _.toArray(arguments)
    , size = funs.length;

  return function( target /*, additional arguments */){
    var ret = undefined
      , args = _.rest(arguments);

    for(var funIndex=0;funIndex<size;funIndex++){
      var fun = funs[funIndex];
      ret = fun.apply(fun, construct(target, args));

      if(existy(ret)) return ret;
    }
    return ret;
  };
}

/*

var str = dispatch(
  invoker("toString", Array.prototype.toString)
  , invoker("toString", String.prototype.toString)
);

str("a");
// => "a"

str(_.range(10));
// => "0,1,2,3,4,5,6,7,8,9"

*/
