class Node {
  constructor (data) {
    this.data = data
  }
}

class Queue {
  constructor () {
    this.queue = []
  }
  enqueue (data) {
    this.queue.push(new Node(data))
    console.log(this.queue)
  }

  dequeue (data) {
    this.queue.shift(data)
    console.log(this.queue)
  }

  peek () {
    console.log(this.queue[0])
  }
}

let queue = new Queue()
queue.enqueue(1)
queue.enqueue(2)
queue.dequeue()
queue.peek()
queue.enqueue('tay')
queue.enqueue('lor')
queue.peek()
