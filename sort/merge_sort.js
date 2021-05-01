/**
|        | 时间复杂度 | 空间复杂度 | 稳定排序 |
|  归并   | O(nlogn) |   O(n)   |   是    |
 */

function mergeSort(list) {
    const tempList = new Array(list.length)
    sort(list, 0, list.length - 1, tempList)
}

function sort(list, left, right, tempList) {
    // 注意条件, left == right 时会出现死循环, 需要 return
    if (left >= right) return
    const middle = parseInt((left + right) >> 1)
    sort(list, left, middle, tempList)
    sort(list, middle + 1, right, tempList)
    merge(list, left, middle, right, tempList)
}

function merge(list, left, middle, right, tempList) {
    let i = left
    let j = middle + 1
    let t = 0
    while(i <= middle && j <= right) {
        if (list[i] <= list[j]) {
            tempList[t++] = list[i++]
        } else {
            tempList[t++] = list[j++]
        }
    }

    // 判断哪个子数组中有剩余的数据, 并将剩余的数据拷贝到临时数组 tempList
    while(i <= middle) {
        tempList[t++] = list[i++]
    }
    while(j <= right) {
        tempList[t++] = list[j++]
    }

    // 将 tempList 中的数组拷贝回 list
    for (let k = 0; k < right - left + 1; k++) {
        list[left + k] = tempList[k]
    }
    // console.log('----' ,tempList, list);
}

module.exports = {
	mergeSort
}