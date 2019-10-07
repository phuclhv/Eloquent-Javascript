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

function listToArray(list){
  let arr = []
   while (list != null){
    arr.push(list.value)
    list = list.rest
  }
  return arr
}

describe('listToArray()', () => {
  
  test('handles empty list', () => {
    const value = []
    const list = arrayToList(value)
    expect(listToArray(list)).toEqual(value)
  })

  test('handles list with 1 value', () => {
    const value = [1]
    const list = arrayToList(value)
    expect(listToArray(list)).toEqual(value)
  })

  test('handles list with multiple values', () => {
    const value = [1, 5, 10, 15]
    const list = arrayToList(value)
    expect(listToArray(list)).toEqual(value)
  })
})

function prepend(num, list){
  newList = {value: num, rest: list}
  return newList
}


describe('prepend()', () => {
  test('prepend with null', () => {
    expect(prepend(10,null)).toEqual(arrayToList([10]))
  })

  test('prepend with 1 value', () => {
    expect(prepend(10,prepend(20,null))).toEqual(arrayToList([10,20]))
  })

})

function nth(list, idx){
  if ((idx != 0) && (!list.rest))
    return nth(list.rest, idx-1)
    if (!list)
      return list.value
  return undefined
}

describe('nth()', () => {
  test('First value', () => {
    expect(nth(arrayToList([10, 20, 30]), 0)).toEqual(10)
  })

  test('Last value', () => {
    expect(nth(arrayToList([10, 20, 30]), 2)).toEqual(30)
  })

  test('Index is higher than number of elements', () => {
    expect(nth(arrayToList([10, 20, 30]), 4)).toEqual(undefined)
  })
})




