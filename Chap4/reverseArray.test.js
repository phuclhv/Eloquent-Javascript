/*
Arrays have a reverse method that changes the array by inverting the order in which its elements appear. For this exercise, write two functions, reverseArray and reverseArrayInPlace. The first, reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order. The second, reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument by reversing its elements. Neither may use the standard reverse method.

Thinking back to the notes about side effects and pure functions in the previous chapter, which variant do you expect to be useful in more situations? Which one runs faster?
*/

function reverseArray(listArray){
  let newArray = []
  for (let i = listArray.length - 1; i >-1 ; i--){
    newArray.push(listArray[i]);
  }
  return newArray;
}

function reverseArrayInPlace(listArray){
  let size = listArray.length
  for (let i = 0; i < size/2 ; i++){
    let tmp = listArray[i];
    listArray[i] = listArray[size-i-1];
    listArray[size-i-1] = tmp;
  }
}

describe('reverseArrayInPlace()', () => {
  
  test('handles empty array', () => {
    let value = []
    reverseArrayInPlace(value)
    expect(value).toEqual([])
  })

  test('handles array with 1 value', () => {
    let value = [5]
    reverseArrayInPlace(value)
    expect(value).toEqual([5])
  })

  test('handles array with multiple values', () => {
    let value = [1, 5, 10, 15]
    reverseArrayInPlace(value)
    expect(value).toEqual([15,10,5,1])
    })
})

describe('reverseArray()', () => {
  
  test('handles empty array', () => {
    expect(reverseArray([])).toEqual([])
  })

  test('handles array with 1 value', () => {
    expect(reverseArray([5])).toEqual([5])
  })

  test('handles array with multiple values', () => {
    expect(reverseArray([1, 5, 10, 15])).toEqual([15,10,5,1])
    })
})