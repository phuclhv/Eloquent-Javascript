// Your code here.
function arrayToList(array){
  if (array.length == 0)
    return null
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
  if (!list)
    return list.value
  return undefined
}

describe('arrayToList()', () => {
  
  test('handles empty array', () => {
    expect(arrayToList([])).toEqual(null)
  })

  test('handles array with 1 value', () => {
    expect(arrayToList([5])).toEqual({ value: 5, rest: null })
  })

  test('handles array with multiple values', () => {
    expect(arrayToList([1, 5, 10, 15])).toEqual({
      value : 1,
      rest  : {
        value : 5,
        rest  : {
          value : 10,
          rest  : {
            value : 15,
            rest  : null
          }
        }
      }
    })
  })
})


