var maxPower = function(s) {
  let num = -1
  let prev = ''
  let numArr = []
  for (const i of s) {
    if(prev !== i) {
      prev = i
      num++
      numArr[num] = 1
    } else {
      numArr[num]++
    }
  }
  return Math.max(...numArr)
};
const max = maxPower('aaabbbbbcdd')
console.log(max)