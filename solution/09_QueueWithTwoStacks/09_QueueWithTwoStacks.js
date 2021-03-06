// 两个栈实现队列
// 分别实现两个方法 appendTail 和 deleteHead

class FakeQueue {
    constructor() {
        this.stack_1 = []
        this.stack_2 = []
    }

    appendTail(value) {
        this.stack_1.push(value)
    }

    deleteHead() {
        let deletedValue = null

        if (this.stack_2.length <= 0) {
            while (this.stack_1.length > 0) {
                this.stack_2.push(this.stack_1.pop())
            }
        }
        if (this.stack_2.length > 0) {
            deletedValue = this.stack_2.pop()
        }
        return deletedValue
    }
}

module.exports = FakeQueue
