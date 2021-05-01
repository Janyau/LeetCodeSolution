const tool = require('./utils/tool')
const util = require('./sort/find_max_O(k)')

let list = tool.randArray(10, 1, 20)
console.log('origin--------', list);
let k = util.findMax(list, list.length)
console.log('result--------', k);
