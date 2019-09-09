// 两个队列实现栈

class FakeStack {
  constructor() {
    this.queue_1 = []
    this.queue_2 = []
  }

  popTail() {
    let popedValue = null
    if (this.queue_1.length > 0) {
      while (this.queue_1.length > 1) {
        this.queue_2.push(this.queue_1.shift())
      }
      popedValue = this.queue_1.shift()
    } else {
      while (this.queue_2.length > 1) {
        this.queue_1.push(this.queue_2.shift())
      }
      popedValue = this.queue_2.shift()
    }

    return popedValue
  }

  appendTail(value) {
    if (this.queue_1.length > 0) {
      this.queue_1.push(value)
    } else {
      this.queue_2.push(value)
    }
  }
}

// test

let fakeStack = new FakeStack()
fakeStack.appendTail(1)
fakeStack.appendTail(2)
fakeStack.appendTail(3)
fakeStack.appendTail(4)
console.log(fakeStack.popTail())
console.log(fakeStack.popTail())
console.log(fakeStack.popTail())
console.log(fakeStack.popTail())
