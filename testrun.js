var _ = require("underscore")
  , gt = require("./gt")
  , lift = require("./lift")
  , note = require("./note")
  , zero = require("./zero")
  , visit = require("./visit")
  , isEven = require("./isEven")
  , actions = require("./actions")
  , partial = require("./partial")
  , partial1 = require("./partial1")
  , pipeline = require("./pipeline")
  , construct = require("./construct")
  , validator = require("./validator")
  , condition1 = require("./conditon1")
  , complement = require("./complement");

var sqrPre = condition1(
  validator("0ではいけません", complement(zero)),
  validator("引数は数値である必要があります", _.isNumber)
);

// sqrPre(_.identity, 0);
// これは以下と同じ
// partial1( sqrPre, _.identity )(0);


function uncheckedSqr(n) { return n * n };

var checkedSqr = partial1(sqrPre, uncheckedSqr);

// console.log( checkedSqr(10) );
// checkedSqr(0)
// checkedSqr('');

/* 
  sqrPre は、関数と値を引数にとる。
  partial1 で、関数部分だけ部分適用し、のこりの引数をあとで渡すようにしている。あたかもsqrPreと、uncheckedSqr が合成されて、sqrPreのチェックを通過した値が、uncheckedSqrに渡されているようにみえる。
  引数が1つだから？
*/

var sillySquare = partial1(
  condition1(validator("偶数を入力してください", isEven))
  , checkedSqr
);

//sillySquare(11);

/*
  さらに条件を合成している。
  condition1の結果は、関数と値を引数に取る
  checkedSqr は値1つを引数に取る関数
  この形 渡し方は、一つ前の例をおなじ。
*/


//
// 実行後の値チェック
//

var sqrPost = condition1(
  validator("結果は数値である必要があります", _.isNumber),
  validator("結果はゼロではない必要があります", complement(zero)),
  validator("結果は1000以上の正の数である必要があります", gt(1000))
);

var megaCheckedSqr = _.compose(partial(sqrPost, _.identity), checkedSqr);

// 右から実行されていく

//megaCheckedSqr(10);

var influences = [
  ['Lisp', 'Smalltalk'],
  ['Lisp', 'Scheme'],
  ['Smalltalk', 'Self'],
  ['Scheme', 'JavaScript'],
  ['Scheme', 'Lua'],
  ['Self', 'Lua'],
  ['Self', 'JavaScript']];


function postDepth(fun, ary) {
  return visit(partial1(postDepth, fun), fun, ary);
}

function preDepth(fun, ary) {
  return visit(partial1(preDepth, fun), fun, fun(ary));
}

postDepth(_.identity, influences);
preDepth(_.identity, influences);


//
// 8
//

function sqr(n) { return n*n; }
function neg(n) { return -n; }

var mSqr2 = lift(sqr)
  , mNote2 = lift(note, _.identity)
  , mNeg2 = lift(neg)
  , negativeSqrAction2 = actions(
      [mSqr2(), mNote2(), mNeg2()],
      function(notUsed, state) {
        return state;
      }
    );

console.log( negativeSqrAction2(100) );

var push = lift(function(stack, e) { return construct(e, stack) })
  , pop = lift(_.first, _.rest)
  , stackAction = actions([
      push(1),
      push(2),
      pop()
    ], function(values, state) {
      return values;
    });

console.log( stackAction([]) );

pipeline(
  []
  , stackAction
  , _.chain
  ).each( function( e ){
    console.log(e);
});

