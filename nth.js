var _ = require("underscore")
   , fail = require("./fail")
   , isIndexed = require("./isIndexed");;

function nth(a, index) {
  if(!_.isNumber(index)) fail("インデックスは数値である必要があります"); 
  if(!isIndexed(a)) fail("インデックス指定可能ではないデータ型はサポートされていません");
  if((index < 0) || (index > a.length -1)) fail("指定されたインデックスは範囲外です");
  return a[index];
}
