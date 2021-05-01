/**
 * 
 * @param {*} list 
 * @param {*} k 
 * 时间复杂度: O(n)
 * 如何用快排思想在O(n)内查找第K大元素？
 */

function findMax(list, k) {
    return findMaxValue(list, 0, list.length - 1, k)
}

function findMaxValue(list, left, right, k) {
    if (k < 1) return null
    let position = partition(list, left, right)
    if (position + 1 < k) {
        findMaxValue(list, position + 1, right, k)
    } else if (position + 1 > k) {
        findMaxValue(list, left, position - 1, k)
    }
    return list[k - 1]
}

function partition(list, left, right) {
    let pivot = Math.floor(Math.random()*(right - left + 1) + left)
    swap(list, pivot, right)
    let pivotValue = list[right]
    let i = left - 1
    for (let j = left; j < right; j++) {
        if (list[j] <= pivotValue) {
            i = i + 1
            swap(list, j, i)
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

module.exports = {
    findMax
}
