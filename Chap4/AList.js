// Your code here.
function arrayToList(array){
  let pastList = null
  let currList = {}
  for (let i = array.length-1; i > -1; i--){
    currList = {value: array[i], rest:pastList}
    pastList = currList
  }
  return currList
}

function listToArray(list){
  let arr = []
   while (list != null){
    arr.push(list.value)
    list = list.rest
  }
  return arr
}

function prepend(num, list){
  newList = {value: num, rest: list}
  return newList
}

function nth(list, idx){
  if (idx != 0)
    return nth(list.rest,idx-1)
  let value = 'value'
  if (list != null)
    return list.value
  return undefined
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 3));
// → 20