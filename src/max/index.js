/**
* This function should return max number in array
* @param {Array} arr - this is an array of numbers
* @return {number} - max number in array
* @example
* max([1, 2, 4]); // 4
* max([-1, 0]);   // 0
*/
const max = arr => {
  let filteredArray = [];
  let result = '';
  arr.forEach(function(item, arr) {
    if (isFinite(item)) {
      filteredArray.push(item);
    }
  });
  if (filteredArray.length !== 0)  {
    result = Math.max.apply( Math, filteredArray );
  } else {
    result = 'there are no numbers in array';
  }
  return result;
};

export default max;
