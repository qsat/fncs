var _ = require("underscore")
  , construct = require("./construct");

function merge(/* 任意の数のオブジェクト */) {
  return _.extend.apply(null, construct({}, arguments));
}

