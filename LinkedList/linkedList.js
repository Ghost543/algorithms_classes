class Node {
    constructor (val) {
        this.val = val
        this.next = null
    }
}


class LinkedList {
    constructor () {
        this.head = null
        // this.next
        // this.tail
        // this.length
    }

    append(val){
        if (this.head === null) {
            this.head = new Node(val)
            return
        }
        let curr = this.head
        while (curr.next !== null) {
            curr = curr.next
        }
        curr.next = new Node(val)
    }

    contains (val) {
        let curr = this.head
        while (curr !== null) {
            if (curr.val === val) {
                return true
            }
            curr = curr.next
        }
        return false
    }

    print () {
        let curr = this.head
        let str = ""
        while (curr !== null) {
            str += curr.val + "--> "
            curr = curr.next
        }
        console.log(str);
    }
}

const list = new LinkedList()

list.append("a")
list.append("b")
list.append("c")
list.append("d")

list.print()

console.log(list.contains("a"))
console.log(list.contains("b"))
console.log(list.contains("c"))
console.log(list.contains("d"))
console.log(list.contains("H"))