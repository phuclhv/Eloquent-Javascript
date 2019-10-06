function isEven(value){
  if (value < 0)
    return null
  if (value == 0)
  	return true
  if (value == 1)
  	return false
  return isEven(value - 2) 
}

console.log(haha)

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??