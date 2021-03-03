
exports.min = function min (array) {
 if (array === undefined) return 0
  return(array.length===0)? 0:array.slice().sort((a,b)=>a-b)[0];
}

exports.max = function max (array) {
  if (array === undefined) return 0
  return(array.length===0)? 0:array.slice().sort((a,b)=>b-a)[0];
}

exports.avg = function avg (array) {
  if (array === undefined) return 0
  let sum=0;
  for(let i=0;i<array.length;i++){
    sum+=array[i];
  }
  return(array.length===0 || array === undefined)?0:sum/array.length;
}
