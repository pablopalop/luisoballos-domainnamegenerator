let pronoun = ['the', 'our'];
let adj = ['great', 'big'];
let noun = ['jogger', 'racoon'];
let domain = ['.com', '.net', '.tv', '.us']
let numOfCombinations = 0

for (i in pronoun){
  for (j in adj){
    for (k in noun){
      for (a in domain){
        console.log(`${pronoun[i]}${adj[j]}${noun[k]}${domain[a]}`)
        numOfCombinations++
      }
    }
  }
}
console.log(`The number of combinations = ${numOfCombinations}`)