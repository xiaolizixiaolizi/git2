class MyPromise {
  constructor(task) {
    this.state = 'pending'//初始状态
    this.value = undefined//初始没有结果默认值是undefined
    this.fulfilledArr = []
    this.rejectedArr = []
    let resolve = data => {
      // 只有是pending状态才改变 错误优先
      if (this.state !== 'pending') return
      // 
      setTimeout(() => {
        this.state = 'fulfilled' //修改状态
        this.value = data//赋值
        this.fulfilledArr.forEach(fulfilledCallback => {
          fulfilledCallback(this.value)
        })
      }, 0);
    }
    let reject = err => {
      if (this.state !== 'pending') return
      setTimeout(() => {
        this.state = 'rejected'
        this.value = err
        this.rejectedArr.forEach(rejectedCallback => {
          rejectedCallback(this.value)
        })
      }, 0);
    }
    task(resolve, reject)
  }

  then(fulfilledCallback) {
    this.fulfilledArr.push(fulfilledCallback)
  }
  catch(rejectedCallback) {
    this.rejectedArr.push(rejectedCallback)
  }
}
module.exports = MyPromise