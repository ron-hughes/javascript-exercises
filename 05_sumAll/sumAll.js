const sumAll = function(int1, int2) {

if (int1 < 0) {
    return 'ERROR'
}
else if (int2 < 0) {
    return 'ERROR'
}
else if (typeof int2 !== "number") {
    return 'ERROR'
}
// count up from int to int2 using a loop
let i = int1
let sum = 0
let sub = 0


if (int1 < int2) {
for (let j = i; j <= int2; j++ ) {
        sum += j
    }
    return sum
}
else if (int1 > int2){
  for (let o = i; o >= int2; o--) {
        sub += o
  }
  return sub
}



};

// Do not edit below this line
module.exports = sumAll;
