function bSearchFirstEqual(list, value) {
    let low = 0
    let high = list.length - 1
    while(low <= high) {
        let middle = Math.floor(low + ((high - low) >> 1))
        if (list[middle] < value) {
            low = middle + 1
        } else if (list[middle] > value) {
            high = middle - 1
        } else {
            if (middle === 0 || list[middle - 1] !== value) {
                return middle
            } else {
                high = middle - 1
            }
        }
    }
    return -1
}

function bSearchFirstMoreEqual(list, value) {
    let low = 0
    let high = list.length - 1
    while(low <= high) {
        let middle = Math.floor(low + ((high - low) >> 1))
        if (list[middle] >= value) {
            if (middle === 0 || list[middle - 1] < value) {
                return middle
            } else {
                high = middle - 1
            }
        } else {
            low = middle + 1   
        }
    }
    return -1
}

function bSearchLastEqual(list, value) {
    let low = 0
    let high = list.length - 1
    while(low <= high) {
        let middle = Math.floor(low + ((high - low) >> 1))
        if (list[middle] < value) {
            low = middle + 1
        } else if (list[middle] > value) {
            high = middle - 1
        } else {
            if (middle === list.length - 1 || list[middle + 1] !== value) {
                return middle
            } else {
                low = middle + 1
            }
        }
    }
    return -1
}

function bSearchLastLessEqual(list, value) {
    let low = 0
    let high = list.length - 1
    while(low <= high) {
        let middle = Math.floor(low + ((high - low) >> 1))
        if (list[middle] <= value) {
            if (middle === list.length - 1 || list[middle + 1] > value) {
                return middle
            } else {
                low = middle + 1
            }
        } else {
            high = middle - 1
        }
    }
    return -1
}

module.exports = {
    bSearchFirstEqual,
    bSearchFirstMoreEqual,
    bSearchLastEqual,
    bSearchLastLessEqual
}