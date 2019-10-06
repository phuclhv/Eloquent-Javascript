let numTags = 7
let symbol = '#'
for (let  i = 0; i < numTags; i++){ 
  let linePrint = ''
	for (let j = 0; j <= i; j++)
      linePrint += symbol
  	console.log(linePrint)
}