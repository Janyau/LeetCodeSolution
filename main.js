const tool = require('./utils/tool')
const util = require('./binary_search/bSearch')

let list = tool.randArray(10, 1, 10).sort((a, b) => a - b)

console.log('origin--------', list, list[5]);
let k = util.bSearchLastLessEqual(list, list[5])
console.log('result--------', k);
