/**
 * sumOfAMultiple() sums of the multiples of 3 and 5 for any number passed in
 * @param  {Number} n Number that is to be used for calculating multiples up to that Number
 * @return {Number}
 */
exports.sumOfAMultiple = function( n ) {
  var sum = 0;
  let numArr = [];
  for (let i = 0; i < n; i++){
    if(i%3 === 0 || i%5 === 0){
      numArr.push(i);
    }
  }
  for(let j = 0; j < numArr.length; j++){
    sum+=numArr[j];
  }

  return sum;
};