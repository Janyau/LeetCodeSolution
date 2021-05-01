// 插入排序
function insertSort(list) {
    if (!list || !list.length) {
        return null
    }
    if (list.length === 1) {
        return list
    }
    for (let i = 1; i < list.length; i++) {
        const value = list[i]
        let j = i - 1
        for (; j >= 0; j--) {
            if (list[j] > value) {
                list[j + 1] = list[j]
            } else {
                break
            }
        }
        list[j + 1] = value
    }
    return list
}

module.exports = {
    insertSort
}