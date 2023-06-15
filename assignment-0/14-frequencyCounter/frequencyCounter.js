function frequencyCounter(word) {
  let table = {}
  for (const e of word){
    if (!table[e])
      table[e] = 1
    else 
      table[e] += 1
  }
  return table
}

// Do not edit this line;
module.exports = frequencyCounter;