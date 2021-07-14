class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor () {
        this.head = null
    }

    append(val){
        if (this.head === null) {
            this.head = new Node(val)
            return
        }
        this._append(this.head, val)

    }
    _append(curr, val){
        if (curr.next === null) {
            curr.next = new Node(val)
            return
        }
        this._append(curr.next, val)
    }

    print(){
        const output = this._print(this.head)
        console.log(output);
    }

    _print(curr){
        if (curr === null) return ""
        return curr.val + "-->" + this._print(curr.next)
    }

    contains (val) {
        return this._contains(this.head,val)
    }
    _contains(curr,val){
        if (curr === null) {
            return false
        }
        if (curr.val === val) {
            return true
        }
        return this._contains(curr.next, val)
    }
}

const list = new LinkedList()

list.append("a")
list.append("b")
list.append("c")
list.append("d")

console.log(list.head);

list.print()

console.log(list.contains("a"))
console.log(list.contains("b"))
console.log(list.contains("g"))
console.log(list.contains("d"))