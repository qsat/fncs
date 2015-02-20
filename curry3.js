module.export = function curry3(fun){
  return function(last){
    return function(middle){
      return function(first){
        return fun(first, middle, last);
      }
    }
  }
}
