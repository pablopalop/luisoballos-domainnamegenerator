const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoon'];
const domain = ['.com', '.net', '.tv', '.us']
let numOfCombinations = 0

const domainsGenerator = () => {
  for (let i in pronoun){
    for (let j in adj){
      for (let k in noun){
        for (let a in domain){
          console.log(`${pronoun[i]}${adj[j]}${noun[k]}${domain[a]}`)
          numOfCombinations++
          
        }
      }
    }
  }
}
console.log(`The number of combinations = ${numOfCombinations}`)