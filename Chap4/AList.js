// Your code here.
function arrayToList(array){
  let pastList = null
  let currList = {}
  for (let i = array.length-1; i > -1; i--){
    console.log(i)
    currList = {value: array[i], rest:pastList}
    pastList = currList
  }
  return currList
}

console.log(arrayToList([10, 20]));
console.log("What")
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
//console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
//console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20