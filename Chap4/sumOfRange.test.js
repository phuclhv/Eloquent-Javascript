/*
Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

As a bonus assignment, modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one, corresponding to the old behavior. The function call range(1, 10, 2) should return [1, 3, 5, 7, 9]. Make sure it also works with negative step values so that range(5, 2, -1) produces [5, 4, 3, 2].
*/

// Your code here.

function range(start, end, step = 1){
  let valueArr = [];

  while (start != end){
    if (Math.abs(end - (start + step)) >= Math.abs(end - start)){
      return []
    }
    valueArr.push(start);
    start += step;
  }
  valueArr.push(end)
  return valueArr
}


describe('range()', () => {
  test('only 2 parameters', () => {
    expect(range(1,5)).toEqual([1,2,3,4,5])
  })

  test('Step = 2', () => {
    expect(range(1,5,2)).toEqual([1,3,5])
  })

  test('Step = -2', () => {
    expect(range(5,1,-2)).toEqual([5,3,1])
    })

  test('Wrong sign of the step', () => {
    expect(range(5,0,2)).toEqual([])
})

  test('Sign does not fit right', () => {
    expect(range(5,0,-2)).toEqual([])
  })

  test('Start = end', () => {
    expect(range(5,5,-2)).toEqual([5])
  })
})

function sum(listValue){
  sumValue = 0
  for (let i = 0; i < listValue.length; i++)  
    sumValue = sumValue + listValue[i];
  return sumValue;
}

describe('sum()', () => {
  test('array does not have value', () => {
    expect(sum([])).toEqual(0)
  })

  test('array has 1 value', () => {
    expect(sum([1])).toEqual(1)
  })

  test('Normal array', () => {
    expect(sum([3,2,1,4,5])).toEqual(15)
  })
})