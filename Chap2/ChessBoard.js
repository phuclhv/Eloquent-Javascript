let gridSize = 8
for (let i = 0; i < gridSize; i++){
  let linePrint = ""
  if (i % 2 == 0)
    firstSymbol = " "
  else
    firstSymbol = "#"
  let symbolAdded = firstSymbol
  for (j = 0; j < gridSize; j++){
    linePrint += symbolAdded
    if (symbolAdded == "#")
      symbolAdded = " "
    else
      symbolAdded = "#"
  }
  console.log(linePrint)
}