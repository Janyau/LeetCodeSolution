// 冒泡排序
function bubbleSort(list) {
    if (!list || !list.length) {
        return null
    }
    if (list.length === 1) {
        return list
    }
    for (let i = 0; i < list.length; i++) {
        let flag = false
        for (let j = 0; j < list.length - 1 - i; j++) {
            if (list[j] > list[j + 1]) {
                const temp = list[j]
                list[j] = list[j + 1]
                list[j + 1] = temp
                flag = true
            }
        }
        if (!flag) {
            break
        }
    }
    return list
}

module.exports = {
	bubbleSort
}