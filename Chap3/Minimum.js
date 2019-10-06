let min = (firstValue, secondValue) => {return firstValue<secondValue?firstValue:secondValue}

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10