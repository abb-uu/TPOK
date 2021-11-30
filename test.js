new Promise((resolve, reject) => {
  console.log(1)
  resolve(3)
}).then((res) => {
  console.log(res)
}).then(() => {
  console.log(2)
})
console.log(4)