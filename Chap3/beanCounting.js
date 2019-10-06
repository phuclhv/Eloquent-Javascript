// Your code here.
function countBs(value){
let count = 0;
 for (let i = 0; i < value.length; i++){
    if (value[i] == "B")
      count += 1;
  }
  return count;
}

function countChar(value, ch){
  let count = 0;
 for (let i = 0; i < value.length; i++){
    if (value[i] == ch)
      count += 1;
  }
return count;
}

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4