/**
|        | 时间复杂度 | 空间复杂度 | 稳定排序 |
|  快排   | O(nlogn) |   O(1)   |   否    |
 */

function quickSortList(list) {
    sort(list, 0, list.length - 1)
}

function sort(list, left, right) {
    if (left >= right) return
    let postion = partition(list, left, right)
    sort(list, left, postion - 1)
    sort(list, postion + 1, right)
}

function partition(list, left, right) {
    let pivot = Math.floor(Math.random()*(right - left + 1)) + left
    swap(list, pivot , right)
    let pivotValue = list[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
        if (list[j] <= pivotValue) {
            i = i + 1
            swap(list, i, j)
        }
    }
    swap(list, i + 1, right)
    return i + 1
}

function swap(list, i, j) {
    let temp = list[i]
    list[i] = list[j]
    list[j] = temp
}

function randArray(len, min, max) {
	return Array.from({length:len}, v=> Math.floor(Math.random()*(max-min)) + min)
}

let list = randArray(10, 1, 10)
console.log('origin--------', list);

quickSortList(list)
console.log('--------' ,list);