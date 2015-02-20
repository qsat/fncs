var _ = require("underscore")
  , cat = require("./cat");

module.exports = function hasKeys(/* 検証したいキーのリスト */) {

  var KEYS = _.toArray(arguments);
  var fun = function(obj) {
    return _.every(KEYS, function(k) {
      return _.has(obj, k);
    });
  };

  fun.message = cat(["Must have values for keys:"], KEYS).join(" ");
  return fun;
}

/*

var checkCommand = checker(
  validator("must be a map", aMap)
  , hasKeys('msg', 'type')
);

checkCommand({msg:"blah",type:"display"});

//=>[]

checkCommand(32);

//=>["マップデータである必要があります","Must have values for keys: msg type"] 

checkCommand({});

//=>["Must have values for keys: msg type"] 

*/
