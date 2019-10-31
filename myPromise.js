// const MyPromise = require('./branch8')
new Promise((resolve, reject) => {
  setTimeout(() => {
    // Math.random() > 0.5 ? resolve(100) : reject(200)
    resolve(300)
    reject(200)
  }, 200);
}).then((data) => {
  console.log(data)
  return data + 1
}).then(data => {
  console.log(data)
})

// let arr=[100,200,300]
// console.log(res)