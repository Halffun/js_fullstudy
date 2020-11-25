let node1 = {val: 1}
let node2 = {val: 2}
let node3 = {val: 3}
let node4 = {val: 4}
node1.next = node2
node2.next = node3
node3.next = node4
node4.next = null
let current = node1
while(current) {
  console.log(current.val);
  current = current.next
}

function reverseLinkList(head) {
  let current = head
  let pre = null
  while (current) {
    let next = current.next
    // 本次交换
    current.next = pre
    // 这个节点交换完之后 走到下一个
    pre = current
    current = next
  }
  return pre
}
console.log(reverseLinkList(node1));