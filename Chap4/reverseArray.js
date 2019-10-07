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


console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]