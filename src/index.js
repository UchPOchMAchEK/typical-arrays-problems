
exports.min = function min (array) {
  if (array == undefined || array.length === 0){
    return 0;
  }
  let numMin = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < numMin) {
      numMin = array[i];
    }
  }
  return numMin;
};

exports.max = function max (array) {
  if (array == undefined || array.length === 0) {
    return 0;
  }
  let numMax = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > numMax) {
      numMax = array[i];
    }
  }
  return numMax;
};

exports.avg = function avg (array) {
  if (array == undefined || array.length === 0){
    return 0;
  }
  let numAvg = 0;
  for (let i = 0; i < array.length; i++) {
    numAvg += array[i];
  }
  numAvg /= array.length;
  return numAvg;
};