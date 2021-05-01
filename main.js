const tool = require('./tool')
const bubble = require('./quick_sort')

let list = tool.randArray(10, 1, 20)
console.log('origin--------', list);
bubble.quickSortList(list)
console.log('result--------', list);