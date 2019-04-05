'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let calledNodes = [];
  let head = linkedlist.head;
  calledNodes.push(head)
  let currentNode = head;
  while (!calledNodes.includes(currentNode.next)) {
    if (currentNode.next !== null) {
      calledNodes.push(currentNode.next)
      currentNode = currentNode.next
    }
    else if (currentNode.next === null) {
      return false;
    }
  }
  return true;
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
